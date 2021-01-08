import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DominioService } from '../../../services/dominio.service';
import { TipoApresentacaoOcorrencia } from '../../../models/tipo-apresentacao-ocorrencia.enum';
import { AbstractComponent } from '../utils/abstract-component';
import { TipoBo } from '../../../models/tipo-bo.enum';
import { SecaoFlagranteAutoriaComponent } from '../secao-flagrante-autoria/secao-flagrante-autoria.component';
import { SecaoEsteveOutroLugarComponent } from '../secao-esteve-outro-lugar/secao-esteve-outro-lugar.component';
import { SecaoTrataseIntoleranciaComponent } from '../secao-tratase-intolerancia/secao-tratase-intolerancia.component';
import { ApresentacaoOcorrencia } from 'src/app/models/apresentacaoOcorrencia.model';

@Component({
  selector: 'app-secao-apresentacao-ocorrencia',
  templateUrl: './secao-apresentacao-ocorrencia.component.html',
  styleUrls: ['./secao-apresentacao-ocorrencia.component.css']
})
export class SecaoApresentacaoOcorrenciaComponent extends AbstractComponent implements OnInit, AfterViewInit {

  @ViewChild(SecaoFlagranteAutoriaComponent) flagranteAutoriaComponent: AbstractComponent;
  @ViewChild(SecaoEsteveOutroLugarComponent) esteveOutroLugarComponent: AbstractComponent;
  @ViewChild(SecaoTrataseIntoleranciaComponent) trataseIntoleranciaComponent: AbstractComponent;

  @Input() isCadastroCompleto = true;

  @Input() tipoBo: TipoBo;

  dropdownApresentacaoOcorrencia:ApresentacaoOcorrencia[];

  constructor(private _fb: FormBuilder, private _serviceDominio: DominioService) {
    super();
  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      apresentacaoOcorrencia: [null, Validators.required],
      apresentacaoOutros: [{ value: null, disabled: true }],
      flagranteAutoria: [null],
      esteveOutroLugar: [null],
      trataseIntolerancia: [null]
    });

    this.loadDropdownApresentacaoOcorrencia();

    this.onChangeApresentacaoOutros();
  }

  ngAfterViewInit() {
    this.formGroup.setControl('flagranteAutoria', this.flagranteAutoriaComponent.formGroup);
    this.formGroup.setControl('esteveOutroLugar', this.esteveOutroLugarComponent.formGroup);
    this.formGroup.setControl('trataseIntolerancia', this.trataseIntoleranciaComponent.formGroup);
  }
  
  get apresentacaoOcorrencia() {
    return this.formGroup.get('apresentacaoOcorrencia');
  }

  get apresentacaoOutros() {
    return this.formGroup.get('apresentacaoOutros');
  }

  get flagranteAutoria() : FormGroup {
    return <FormGroup> this.formGroup.get('flagranteAutoria');
  }

  get esteveOutroLugar() : FormGroup {
    return <FormGroup> this.formGroup.get('esteveOutroLugar');
  }

  get trataseIntolerancia() : FormGroup {
    return <FormGroup> this.formGroup.get('trataseIntolerancia');
  }
  
  loadDropdownApresentacaoOcorrencia() {
    this._serviceDominio.listApresentacaoOcorrencia().subscribe((result:ApresentacaoOcorrencia[]) => {
      this.dropdownApresentacaoOcorrencia = result;
    }, error => {
      console.log(error);
    });
  }

  onChangeApresentacaoOutros() {
    this.apresentacaoOcorrencia.valueChanges.subscribe((value:ApresentacaoOcorrencia) => {

      if (value.descricao.toUpperCase().search("OUTROS") == -1) {
        this.apresentacaoOutros.setValue(null);
        this.apresentacaoOutros.setValidators(null);
        this.apresentacaoOutros.disable();
      } else {
        this.apresentacaoOutros.setValidators(Validators.required);
        this.apresentacaoOutros.enable({emitEvent: false});
      }
    });
  }
}
