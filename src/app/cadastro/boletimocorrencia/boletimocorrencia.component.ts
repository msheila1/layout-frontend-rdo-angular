import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AbstractComponent } from 'src/app/shared/components/utils/abstract-component';
import { ApresentacaoOcorrenciaComponent } from './shared/apresentacao-ocorrencia/apresentacao-ocorrencia.component';
import { EnderecoAutoCompleteComponent } from './shared/endereco-auto-complete/endereco-auto-complete.component';
import { EsteveOutroLugarComponent } from './shared/esteve-outro-lugar/esteve-outro-lugar.component';
import { FlagranteAutoriaComponent } from './shared/flagrante-autoria/flagrante-autoria.component';
import { IdentificaoRdoComponent } from './shared/identificao-rdo/identificao-rdo.component';
import { SolucaoComponent } from './shared/solucao/solucao.component';
import { TrataseIntoleranciaComponent } from './shared/tratase-intolerancia/tratase-intolerancia.component';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { TipoBoEnum } from 'src/app/models/enums/tipo-bo.enum';
import { TipoLocalComponent } from './shared/tipo-local/tipo-local.component';
import { PeriodoEnum } from 'src/app/models/enums/periodo.enum';
import { TipoLocal } from 'src/app/models/tipo-local.model';
import { ApresentacaoOcorrencia } from 'src/app/models/apresentacaoOcorrencia.model';
import { Uf } from 'src/app/models/uf.model';
import { TipoSolucaoEnum } from 'src/app/models/enums/tipo-solucao.enum';
import { CircunscricaoDTO } from 'src/app/models/circunscricaoDTO.model';
import { FormBuilder } from '@angular/forms';
import { DominioService } from 'src/app/services/dominio.service';

@Component({
  selector: 'app-boletimocorrencia',
  templateUrl: './boletimocorrencia.component.html',
  styleUrls: ['./boletimocorrencia.component.css']
})
export class BoletimocorrenciaComponent extends AbstractComponent implements OnInit, AfterViewInit {
  
  @ViewChild(ApresentacaoOcorrenciaComponent) apresentacaoOcorrenciaComponent: AbstractComponent;
  @ViewChild(EnderecoAutoCompleteComponent) enderecoAutoCompleteComponent: AbstractComponent;
  @ViewChild(EsteveOutroLugarComponent) esteveOutroLugarComponent: AbstractComponent;
  @ViewChild(FlagranteAutoriaComponent) flagranteAutoriaComponent: AbstractComponent;
  @ViewChild(IdentificaoRdoComponent) identificaoRdoComponent: AbstractComponent;
  @ViewChild(SolucaoComponent) solucaoComponent: AbstractComponent;
  @ViewChild(TipoLocalComponent) tipoLocalComponent: AbstractComponent;
  @ViewChild(TrataseIntoleranciaComponent) trataseIntoleranciaComponent: AbstractComponent;
  
  listPeriodo: PeriodoEnum[];
  listTipoLocal: TipoLocal[];
  listApresentacaoOcorrencia:ApresentacaoOcorrencia[];
  listUf: Uf[];
  listSolucao: { value: TipoSolucaoEnum; label: string }[];
  
  tipoBo: TipoBoEnum;
  circunscricao: CircunscricaoDTO;

  constructor(protected messageService: MessageService,
    private router: Router,
    private _fb: FormBuilder,
    private _serviceDominio: DominioService) {
    super();
  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      plantonistaNome: [null],
      plantonista: [null],
      identificaoRdo: [null],
      tipoLocal: [null],
      enderecoAutoComplete: [null],
      flagranteAutoria: [null],
      apresentacaoOcorrencia: [null],
      esteveOutroLugar: [null],
      trataseIntolerancia: [null],
      solucao: [null]
    });

    this.loadListPeriodo();
    this.loadListTipoLocal();
    this.loadUf();
    this.loadListApresentacaoOcorrencia();
    this.loadListSolucao();
  }

  ngAfterViewInit(): void {
    this.formGroup.setControl('identificaoRdo', this.identificaoRdoComponent.formGroup);
    this.formGroup.setControl('tipoLocal', this.tipoLocalComponent.formGroup);
    this.formGroup.setControl('enderecoAutoComplete', this.enderecoAutoCompleteComponent.formGroup);
    this.formGroup.setControl('flagranteAutoria', this.flagranteAutoriaComponent.formGroup);
    this.formGroup.setControl('apresentacaoOcorrencia', this.apresentacaoOcorrenciaComponent.formGroup);
    this.formGroup.setControl('esteveOutroLugar', this.esteveOutroLugarComponent.formGroup);
    this.formGroup.setControl('trataseIntolerancia', this.trataseIntoleranciaComponent.formGroup);
    this.formGroup.setControl('solucao', this.solucaoComponent.formGroup);
  }

  onSubmit() {
    this.validateControls();

    console.log(this.formGroup);
    
    
    if (this.formGroup.valid) {

      let dataOcorrencia = this.identificaoRdo.get("dataOcorrencia").value != null ? this.identificaoRdo.get("dataOcorrencia").value : this.identificaoRdo.get("dataOcorrenciaInicial").value;
      let dataAtual = new Date();
      let diff = Math.abs(dataOcorrencia.getTime() - dataAtual.getTime());
      let diffDays = Math.ceil(diff / (1000 * 3600 * 24));
  
      if(diffDays > 30){
        this.messageService.clear();
        this.messageService.add({key: 'maior30dias', sticky: true, severity:'warn', detail:'A diferença entre a data da ocorrência e a Data da elaboração do Boletim de Ocorrência é superior a 30 dias. Deseja continuar a elaboração do BO com a data fornecida?'});
        return;
      }
      
      this.saveBO();
    } else {
      this.messageService.add({ severity: 'error', summary: 'Erro ao validar', detail: 'Preencha todos os campos obrigatórios (*) antes de prosseguir' });
    }
  }

  onConfirm() {
    this.messageService.clear('maior30dias');
    this.saveBO();
  }

  onReject() {
    this.messageService.clear('maior30dias');
  }

  saveBO(){
    this.messageService.add({ severity: 'success', summary: '', detail: 'Registro Salvo com Sucesso' });
  }

  handleTipoBoChange(event) {
    this.tipoBo = event;
  }

  handleCircunscricaoChange(event) {
    this.circunscricao = event;
  }

  loadListPeriodo(){
    this._serviceDominio.listPeriodo().subscribe((result:PeriodoEnum[]) => {
      this.listPeriodo = result;
    }, error => {
      console.log(error);
    }
  )};

  loadListTipoLocal(){
    this._serviceDominio.listTipoLocal().subscribe((result: TipoLocal[]) => {
      this.listTipoLocal = result;
    }, error => {
      console.log(error);
    });
  }

  loadListApresentacaoOcorrencia() {
    this._serviceDominio.listApresentacaoOcorrencia().subscribe((result:ApresentacaoOcorrencia[]) => {
      this.listApresentacaoOcorrencia = result;
    }, error => {
      console.log(error);
    });
  }

  loadUf(){
    this.listUf = this._serviceDominio.listUf();
  }

  loadListSolucao() {
    this.listSolucao = this._serviceDominio.listTipoSolucao();
  }

  get plantonistaNome () {
    return this.formGroup.get('plantonistaNome');
  }

  get plantonista() {
    return this.formGroup.get('plantonista');
  }

  get identificaoRdo() {
    return this.formGroup.get('identificaoRdo');
  }

  get tipoLocal() {
    return this.formGroup.get('tipoLocal');
  }

  get enderecoAutoComplete() {
    return this.formGroup.get('enderecoAutoComplete');
  }

  get flagranteAutoria() {
    return this.formGroup.get('flagranteAutoria');
  }

  get apresentacaoOcorrencia() {
    return this.formGroup.get('apresentacaoOcorrencia');
  }

  get esteveOutroLugar() {
    return this.formGroup.get('esteveOutroLugar');
  }

  get trataseIntolerancia() {
    return this.formGroup.get('trataseIntolerancia');
  }

  get solucao(){
    return this.formGroup.get('solucao');
  }

}
