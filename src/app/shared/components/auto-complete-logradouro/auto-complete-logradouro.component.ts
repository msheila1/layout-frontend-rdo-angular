import { Component, OnInit, Input } from '@angular/core';
import { EnderecoService } from '../../../services/endereco.service';
import { AbstractComponent } from '../utils/abstract-component';
import { Validators, FormBuilder } from '@angular/forms';
import { DominioService } from 'src/app/services/dominio.service';
import { Uf } from 'src/app/models/uf.model';
import { MunicipioDTO } from 'src/app/models/municipioDTO.model';
import { LogradouroDTO } from 'src/app/models/logradouroDTO.model';
import { Page } from '../../models/page.model';


import { MapsAPILoader, MouseEvent, AgmMarker } from '@agm/core';
// import {} from '@types/googlemaps';
import { ViewChild, ElementRef, NgZone, } from '@angular/core';
import { FormControl } from '@angular/forms';

import { GooglePlaceDirective } from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-auto-complete-logradouro',
  templateUrl: './auto-complete-logradouro.component.html',
  styleUrls: ['./auto-complete-logradouro.component.css']
})

export class AutoCompleteLogradouroComponent extends AbstractComponent implements OnInit {

  @Input() required = true;

  constructor(private _fb: FormBuilder, 
              private _serviceEndereco: EnderecoService, 
              private _serviceDominio: DominioService,
              private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
    super();
  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      id: [null],
      endereco: [{value: null, disabled: true}, this.required ? [Validators.required] : null],
      logradouro: [{ value: null, disabled: true }],
      numeroLogradouro:  [{value: null, disabled: true}],
      complemento: [{value: null, disabled: true}], 
      bairro: [{ value: null, disabled: true }],
      cep: [{ value: null, disabled: true }],
      uf: [null],
      municipio: [{value: null, disabled: true}],
      latitude: [{ value: null, disabled: true }],
      longitude: [{ value: null, disabled: true }],
    });

    this.loadUf();
  }

  get endereco() {
    return this.formGroup.get('endereco');
  }

  get logradouro() {
    return this.formGroup.get('logradouro');
  }

  get numeroLogradouro() {
    return this.formGroup.get('numeroLogradouro');
  }

  get complemento() {
    return this.formGroup.get('complemento');
  }

  get bairro() {
    return this.formGroup.get('bairro');
  }

  get cep() {
    return this.formGroup.get('cep');
  }

  get uf() {
    return this.formGroup.get('uf');
  }

  get municipio() {
    return this.formGroup.get('municipio');
  }

  get latitude() {
    return this.formGroup.get('latitude');
  }

  get longitude() {
    return this.formGroup.get('longitude');
  }



  listSuggestionLogradouro = [];

  listUf = [];
  listSuggestionUf = [];

  listMunicipio = [];
  listSuggestionMunicipio = [];

  listLogradouroMapa = [];
  hiddenMapaButton = true;
  hiddenMapa = true;

  // método responsavel por carregar as sugestões de autoComplete do logradouro,
  // realizando consulta em nossa base e se necessário no google
  loadSuggestionsLogradouro(event){
    let search = event.query;
    let uf: Uf = this.uf.value;
    let municipio: MunicipioDTO = this.municipio.value;
    
    this._serviceEndereco.findLogradouro(uf.id_uf, municipio.nome_ibge, search).subscribe(result => {
      this.listSuggestionLogradouro = result;

      if(this.listSuggestionLogradouro.length == 0){
        this.hiddenMapaButton = false;
        this.resetInfoMapa();       
      }

    }, error => {
      console.log(error);
    });    
  }

  // responsável por settar o endereço selecionado no autoComplete e seus respectivos campos
  selectSugestionLogradouro(selected:LogradouroDTO){
    this.resetSessaoEndereco();

    this.setValueField('logradouro', selected.descricaoLogradouro);
    this.setValueField('cep', selected.descricaoCep);
    this.setValueField('bairro', selected.descricaoBairro);
    
    this.numeroLogradouro.enable();
    this.complemento.enable();
    
    // this.saveNewLogradouro(selected); //TODO:voltar
  }

  // se for identificado que o Endereço tem origem do Google, o mesmo é enviado para ser persistido em nossa base,
  // sendo assim eu uma possível segunda consulta do mesmo endereço não há a necessidade de ir no google novamente.
  saveNewLogradouro(dto:LogradouroDTO) {
    if(dto.fromGoogle){
      this._serviceEndereco.saveLogradouro(dto).subscribe(result => {
        alert("Sucesso");
      }, error => {
        console.log(error);
        alert("ERROR: saveLogradouro");
      });   
    }
  }

  /** UF */
  loadUf(){
    this.listUf = this._serviceDominio.listUf();
  }

  loadSuggestionUf(event){
    this.listSuggestionUf = [];

    for(let i=0; i < this.listUf.length; i++){
      let uf: Uf = this.listUf[i];

      if(uf.id_uf.toLowerCase().search(event.query.toLowerCase()) == 0){
        this.listSuggestionUf.push(uf);
      }
    }
  }

  selectSugestionUf(selected){
    this.onChangeUf();

    this._serviceDominio.listMunicipioByUf(selected.id_uf).subscribe((result:Page<MunicipioDTO>) => {
      this.listMunicipio = result.content;
      this.municipio.enable();
    }, error => {
      console.log(error);
    });
  }

  onChangeUf(){
    this.setNullAndDisableField("municipio");
    this.setNullAndDisableField("logradouro");

    this.disableSessaoEndereco();
  }

  /** Municipio */
  selectSugestionMunicipio(selected:MunicipioDTO) {
    this.endereco.enable();
  }

  loadSuggestionMunicipio(event){
    this.onChangeMunicipio();

    this.listSuggestionMunicipio = [];

    for(let i=0; i < this.listMunicipio.length; i++){
      let municipio: MunicipioDTO = this.listMunicipio[i];

      if(municipio.nome_ibge == null){
        continue;
      }

      if(municipio.nome_ibge.toLowerCase().search(event.query.toLowerCase()) == 0){
        this.listSuggestionMunicipio.push(municipio);
      }
    }
  }

  onChangeMunicipio(){
    this.disableSessaoEndereco();
  }

  // limpa e habilita todos os campos da seção Endereço
  private resetSessaoEndereco() {
    this.resetFied('logradouro');
    this.resetFied('cep');
    this.resetFied('bairro');
  }

  //limpa e desabilita toda a seção de Endereço
  private disableSessaoEndereco() {
    this.endereco.setValue(null);
    this.endereco.disable();
    this.setNullAndDisableField("logradouro");
    this.setNullAndDisableField("numeroLogradouro");
    this.setNullAndDisableField("complemento");
    this.setNullAndDisableField("bairro");
    this.setNullAndDisableField("cep");
  }

  // limpa e habilita o campo informado por parâmetro
  private resetFied(field:string){
    this.formGroup.get(field).setValue(null);
    (<HTMLInputElement> document.getElementById(field)).disabled = false;
  }

  // setta o valor no formGroup e caso exista valor desabilita o campo correspondente atravez do id com componente
  private setValueField(field:string, value:any){
    this.formGroup.get(field).setValue(value);
    
    if(value){
      (<HTMLInputElement> document.getElementById(field)).disabled = true;
    }
  }

  // setta para null o campo e desabilita o campo
  private setNullAndDisableField(field:string){
    this.formGroup.get(field).setValue(null);
    (<HTMLInputElement> document.getElementById(field)).disabled = true;
  }

  /** GOOGLE */

  @ViewChild('places') places: GooglePlaceDirective;
  @ViewChild('search' ) public searchElement: ElementRef;

  options = {
    types: ['address'],
    componentRestrictions: { country: 'BR' }
  }

  lat: number = -23.5489;
  lng: number = -46.6388;

  latMarker : number = 0;
  lgnMarker : number = 0;

  zoom: number = 8;
  
  handleAddressChange(address: Address) {
      console.log(address.geometry.location.lng());
      console.log(address.geometry.location.lat());
      console.log(address.geometry.location.toJSON());
      console.log(address.geometry.viewport.getNorthEast());
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

  onRowSelectMapa(selected:LogradouroDTO){
    this.selectSugestionLogradouro(selected);
  }

  private resetInfoMapa() {
    this.lat = -23.5489;
    this.lng = -46.6388;

    this.latMarker = 0;
    this.lgnMarker = 0;

    this.zoom = 8;
  }
  /** GOOGLE */

}