import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VestuariosPessoaService } from '../../../cadastro/pessoas/vestuariosPessoa.service';
import { AdornoPessoaService } from '../../../cadastro/pessoas/adornoPessoa.service';
import { CaracteristicasPessoaService } from '../../../cadastro/pessoas/caracteristicasPessoa.service';
import { PatologiaPessoaService } from '../../../cadastro/pessoas/patologiaPessoa.service';
import { Validators, FormBuilder } from '@angular/forms';
import { AbstractComponent } from '../utils/abstract-component';

@Component({
  selector: 'app-table-caracteristica-fisica',
  templateUrl: './table-caracteristica-fisica.component.html',
  styleUrls: ['./table-caracteristica-fisica.component.css']
})
export class TableCaracteristicaFisiscaComponent extends AbstractComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  items: any;

  showLocalAntes = false;
  showteste = false;

  //Vestuários - Pessoas
  //displayDialogVestuario = false;
  VestuariosPessoaService: VestuariosPessoaService;
  selecionaVestuariosPessoa; VestuariosPessoa; tipoVest; descricaoVest: any;

  //Adornos - Pessoas
 // displayDialogAdorno = false;
  AdornoPessoaService: AdornoPessoaService;
  selecionaAdornoPessoa; AdornoPessoa; tipoAdorno; localAdorno; descricaoAdorno: any;

  //Características Pessoais - Pessoas
  //displayCaracteristicaPessoa = false;
  CaracteristicasPessoaService: CaracteristicasPessoaService;
  selecionaCaracteristicasPessoa; CaracteristicasPessoa; tipoCaract; localCaract: any;

  //Patologia - Pessoas
  //displayDialogPastologia = false;
  PatologiaPessoaService: PatologiaPessoaService;
  selecionaPatologiaPessoa; PatologiaPessoa; tipoPatologia: any;


  constructor(private _fb: FormBuilder) {
    super();
    //Vestuários Pessoa
    this.VestuariosPessoaService = new VestuariosPessoaService();
    //Adorno Pessoa
    this.AdornoPessoaService = new AdornoPessoaService();
    //Características Pessoais - Pessoa
    this.CaracteristicasPessoaService = new CaracteristicasPessoaService();
    //Patologia - Pessoa
    this.PatologiaPessoaService = new PatologiaPessoaService();
  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      outroLugarApresentacao: [null, Validators.required],
      formaApresentacao: [null],
      possuiAdornos: [null],
      teste: [null]
    });

    this.onChangeEsteveOutroLugarAntes();
    this.onChangePossuiAdornos();

    //Vestuários Pessoa
    this.VestuariosPessoa = this.VestuariosPessoaService.getVestuariosPessoa();
    this.descricaoVest = this.VestuariosPessoaService.getDescricaoVest();

    //Adornos Pessoa
    this.AdornoPessoa = this.AdornoPessoaService.getAdornoPessoa();
    this.tipoAdorno = this.AdornoPessoaService.getTipoAdorno();
    this.localAdorno = this.AdornoPessoaService.getLocalAdorno();
    this.descricaoAdorno = this.AdornoPessoaService.getDescricaoAdorno();

    //Características Pessoais - Pessoa
    this.CaracteristicasPessoa = this.CaracteristicasPessoaService.getCaracteristicasPessoa();
    this.tipoCaract = this.CaracteristicasPessoaService.getTipoCaract();
    this.localCaract = this.CaracteristicasPessoaService.getLocalCaract();

    //Patologia - Pessoa
    this.PatologiaPessoa = this.PatologiaPessoaService.getPatologiaPessoa();
    this.tipoPatologia = this.PatologiaPessoaService.getTipoPatologia();

    //Botão Excluir
    this.items = [
    {label: 'Excluir', icon: 'fa fa-close',routerLink: ['/']}
    ];

  }
  

  onClose() {
    this.displayChange.emit(false);
  }

  get outroLugarApresentacao() {
    return this.formGroup.get('outroLugarApresentacao');
  }

  get formaApresentacao() {
    return this.formGroup.get('formaApresentacao');
  }

  get localApresentacaoAntes() {
    return this.formGroup.get('localApresentacaoAntes');
  }

  get possuiAdornos() {
    return this.formGroup.get('possuiAdornos');
  }

  get teste() {
    return this.formGroup.get('teste');
  }
  


  onChangeEsteveOutroLugarAntes() {
    this.outroLugarApresentacao.valueChanges.subscribe(value => {
      this.showLocalAntes = JSON.parse(value);
      
      if (!this.showLocalAntes) {
        this.resetControl(this.formaApresentacao);

      } else {
        this.formaApresentacao.setValidators(Validators.required);
      }
    });
  }

  onChangePossuiAdornos() {
    this.possuiAdornos.valueChanges.subscribe(value => {
      this.showteste = JSON.parse(value);
      
      if (!this.showteste) {
        this.resetControl(this.teste);

      } else {
        this.teste.setValidators(Validators.required);
      }
    });
  }
}
