import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { DominioService } from 'src/app/services/dominio.service';
import { Uf } from 'src/app/models/uf.model';

import { MapsAPILoader, MouseEvent, AgmMarker } from '@agm/core';
import { ViewChild, ElementRef, NgZone, } from '@angular/core';
import { FormControl } from '@angular/forms';

import { GooglePlaceDirective } from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { CircunscricaoDTO } from 'src/app/models/circunscricaoDTO.model';
import { AbstractComponent } from 'src/app/shared/components/utils/abstract-component';
import { EnderecoService } from 'src/app/services/endereco.service';
import { Page } from 'src/app/shared/models/page.model';
import { Municipio } from 'src/app/models/municipio.model';
import { Logradouro } from 'src/app/models/logradouro.model';

@Component({
  selector: 'app-endereco-auto-complete',
  templateUrl: './endereco-auto-complete.component.html',
  styleUrls: ['./endereco-auto-complete.component.css']
})
export class EnderecoAutoCompleteComponent extends AbstractComponent implements OnInit {

  @ViewChild('places') places: GooglePlaceDirective;
  @ViewChild('search') public searchElement: ElementRef;

  @Output() emitterCircunscricao = new EventEmitter<CircunscricaoDTO>();

  listSuggestionLogradouro = [];

  @Input() listUf: Uf[];
  listSuggestionUf = [];

  listMunicipio = [];
  listSuggestionMunicipio = [];

  listLogradouroMapa = [];
  hiddenMapaButton = true;
  hiddenMapa = true;

  lat: number = -23.5489;
  lng: number = -46.6388;

  latMarker : number = 0;
  lgnMarker : number = 0;

  zoom: number = 8;

  constructor(private _fb: FormBuilder, 
              private _serviceEndereco: EnderecoService, 
              private _serviceDominio: DominioService,
              private _mapsAPILoader: MapsAPILoader,
              private _ngZone: NgZone) {
    super();
  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      id: [null],
      endereco: [{value: null, disabled: true}],
      logradouro: [{ value: null, disabled: true }],
      numeroLogradouro:  [{value: null, disabled: true}, [Validators.required]],
      complemento: [{value: null, disabled: true}], 
      bairro: [{ value: null, disabled: true }],
      cep: [{ value: null, disabled: true }],
      uf: [null, [Validators.required]],
      municipio: [{value: null, disabled: true}, [Validators.required]],
      latitude: [{ value: null, disabled: true }],
      longitude: [{ value: null, disabled: true }],
      circunscricao: [null]
    });

    this.endereco.setValidators([this.validateEndereco]);
  }

  validateEndereco = () : { [key: string]: boolean } | null => {
    if(!this.logradouro.value && !this.bairro.value && !this.cep.value){
      return {
        required: true
      };
    }
  }

  // método responsavel por carregar as sugestões de autoComplete do logradouro,
  // realizando consulta em nossa base e se necessário no google
  loadSuggestionsLogradouro(event){
    let search = event.query;
    let uf: Uf = this.uf.value;
    let municipio: Municipio = this.municipio.value;
    
    this._serviceEndereco.findLogradouro(uf.id, municipio.nomeIbge, search).subscribe(result => {
      this.listSuggestionLogradouro = result;

      if(this.listSuggestionLogradouro.length == 0){
        this.hiddenMapaButton = false;
        this.resetInfoMapa();       
      } else {
        this.hiddenMapaButton = true;
      }

      this.resetInfoMapa();       
    }, error => {
      console.log(error);
    });    
  }

  // responsável por settar o endereço selecionado no autoComplete e seus respectivos campos
  selectSugestionLogradouro(selected:Logradouro){
    this.resetSessaoEndereco();

    this.setValueField(this.logradouro, selected.descricaoLogradouro);
    this.setValueField(this.cep, selected.descricaoCep);
    this.setValueField(this.bairro, selected.descricaoBairro);
    
    this.numeroLogradouro.enable();
    this.complemento.enable();
    
    this.onChageCircuncricao(selected.lat, selected.lng);
    
    this.saveNewLogradouro(selected);

    this.removeErrors('required', this.endereco);
  }
  
  private onChageCircuncricao(latitude, longitude){
    this._serviceEndereco.findDelegaciaByLatitudeAndLongitude(latitude, longitude).subscribe((result:CircunscricaoDTO) => {
      this.circunscricao.setValue(result.descricao);
      this.emitterCircunscricao.emit(result);
    }, error => {
      console.log(error);
    });
  }

  // se for identificado que o Endereço tem origem do Google, o mesmo é enviado para ser persistido em nossa base,
  // sendo assim eu uma possível segunda consulta do mesmo endereço não há a necessidade de ir no google novamente.
  saveNewLogradouro(dto:Logradouro) {
    if(dto.fromGoogle){
      this._serviceEndereco.saveLogradouro(dto).subscribe(result => {
        console.log("saveNewLogradouro() - Endereço salvo na base com sucesso");
      }, error => {
        console.log(error);
      });   
    }
  }

  /** UF */
  loadSuggestionUf(event){
    this.listSuggestionUf = [];

    for(let i=0; i < this.listUf.length; i++){
      let uf: Uf = this.listUf[i];

      if(uf.uf.toLowerCase().search(event.query.toLowerCase()) == 0){
        this.listSuggestionUf.push(uf);
      }
    }
  }

  selectSugestionUf(selected){
    this.onChangeUf();

    this._serviceDominio.listMunicipioByUf(selected.id_uf).subscribe((result:Page<Municipio>) => {
      this.listMunicipio = result.content;
      this.municipio.enable();
    }, error => {
      console.log(error);
    });
  }

  onChangeUf(){
    this.setNullAndDisableField(this.municipio);
    this.setNullAndDisableField(this.logradouro);
    this.disableSessaoEndereco();
  }

  /** Municipio */
  selectSugestionMunicipio(selected:Municipio) {
    this.endereco.enable();
  }

  loadSuggestionMunicipio(event){
    this.onChangeMunicipio();

    this.listSuggestionMunicipio = [];

    for(let i=0; i < this.listMunicipio.length; i++){
      let municipio: Municipio = this.listMunicipio[i];

      if(municipio.nomeIbge == null){
        continue;
      }

      if(municipio.nomeIbge.toLowerCase().search(event.query.toLowerCase()) == 0){
        this.listSuggestionMunicipio.push(municipio);
      }
    }
  }

  onChangeMunicipio(){
    this.disableSessaoEndereco();
  }

  // limpa e habilita todos os campos da seção Endereço
  private resetSessaoEndereco() {
    this.resetFied(this.logradouro);
    this.resetFied(this.cep);
    this.resetFied(this.bairro);
  }

  //limpa e desabilita toda a seção de Endereço
  private disableSessaoEndereco() {
    this.endereco.setValue(null);
    this.endereco.disable();
    this.setNullAndDisableField(this.logradouro);
    this.setNullAndDisableField(this.numeroLogradouro);
    this.setNullAndDisableField(this.complemento);
    this.setNullAndDisableField(this.bairro);
    this.setNullAndDisableField(this.cep);
  }

  // limpa e habilita o campo informado por parâmetro
  private resetFied(field:FormControl){
    field.setValue(null);
    field.enable();
  }

  // setta o valor no formGroup e caso exista valor desabilita o campo correspondente atravez do id com componente
  private setValueField(field:FormControl, value:any){
    field.setValue(value);
        
    if(value){
      field.disable();
    }
  }

  // setta para null o campo e desabilita o campo
  private setNullAndDisableField(field:FormControl){
    field.setValue(null);
    field.disable();
  }

  /** GOOGLE */

  handleAddressChange(address: Address) {
      this.zoom = 17;
      
      this.lat  = address.geometry.location.lat();
      this.lng = address.geometry.location.lng();
      
      this.latMarker = this.lat;
      this.lgnMarker = this.lng;
  }

  onClickMapa() {
    this.hiddenMapa = false;
  }

  mapClick(event: MouseEvent){
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;    
    
    this.latMarker = this.lat;
    this.lgnMarker = this.lng;
    
    this.zoom = 17;
  }

  makerClick(event : AgmMarker){
    this._serviceEndereco.findByLatitudeAndLongitude(event.latitude, event.longitude).subscribe(result => {
      this.listLogradouroMapa = result;
      console.log(result);
    }, error => {
      console.log(error);
    });
  }

  onRowSelectMapa(selected:Logradouro){
    this.selectSugestionLogradouro(selected);
    this.hiddenMapa = true;
    this.hiddenMapaButton = true;

    this.endereco.setValue(selected);

    this.resetInfoMapa();
  }

  private resetInfoMapa() {
    this.lat = -23.5489;
    this.lng = -46.6388;

    this.latMarker = 0;
    this.lgnMarker = 0;

    this.zoom = 8;

    this.listLogradouroMapa = [];
    (<HTMLInputElement> document.getElementById("autoCompleteMapa")).value = null;
  }

  /** GOOGLE */

  get endereco() {
    return this.formGroup.get('endereco');
  }

  get logradouro() : any {
    return this.formGroup.get('logradouro');
  }

  get numeroLogradouro() : any{
    return this.formGroup.get('numeroLogradouro');
  }

  get complemento() : any{
    return this.formGroup.get('complemento');
  }

  get bairro() : any {
    return this.formGroup.get('bairro');
  }

  get cep() : any {
    return this.formGroup.get('cep');
  }

  get uf() : any {
    return this.formGroup.get('uf');
  }

  get municipio() : any {
    return this.formGroup.get('municipio');
  }

  get latitude() : any {
    return this.formGroup.get('latitude');
  }

  get longitude() : any {
    return this.formGroup.get('longitude');
  }

  get circunscricao() : any {
    return this.formGroup.get('circunscricao');
  }

}
