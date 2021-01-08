//import { PlantonistaCompletoService } from './plantonistaCompleto.service';
import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Uf } from 'src/app/models/uf.model';
import { DominioService } from 'src/app/services/dominio.service';
import { Router } from '@angular/router';
import { Plantonista } from 'src/app/models/plantonista.model';
import { AbstractComponent } from 'src/app/shared/components/utils/abstract-component';
import { TipoBo } from 'src/app/models/tipo-bo.enum';
import { SecaoIdentificacaoRdoComponent } from 'src/app/shared/components/secao-identificacao-rdo/secao-identificacao-rdo.component';
import { SecaoLocalizacaoComponent } from 'src/app/shared/components/secao-localizacao/secao-localizacao.component';
import { SecaoApresentacaoOcorrenciaComponent } from 'src/app/shared/components/secao-apresentacao-ocorrencia/secao-apresentacao-ocorrencia.component';
import { Bo } from 'src/app/models/boletim-ocorrencia.model';
import { Autoria } from 'src/app/models/autoria.enum';
import { SecaoSolucaoComponent } from 'src/app/shared/components/secao-solucao/secao-solucao.component';

@Component({
  selector: 'app-boletimocorrencia',
  templateUrl: './boletimocorrencia.component.html',
  styleUrls: ['./boletimocorrencia.component.css'],
  providers: [MessageService]
})
export class BoletimOcorrenciaComponent extends AbstractComponent implements OnInit, AfterViewInit {

  @ViewChild(SecaoIdentificacaoRdoComponent) identificacaoRdoComponent: AbstractComponent;
  @ViewChild(SecaoLocalizacaoComponent) localizacaoComponent: AbstractComponent;
  @ViewChild(SecaoApresentacaoOcorrenciaComponent) apresentacaoOcorrenciaComponent: AbstractComponent;
  @ViewChild(SecaoSolucaoComponent) solucaoComponent: AbstractComponent;

  tipoBo: TipoBo;

  formLocalizacao: FormGroup;
  formSolucao: FormGroup;
  
  submitted: boolean;

  select: any;
  selected: string;
  SelecionaSim: string = '1';
  SelecionaNao: string = '2';

  displayDialogPlantonista = false;

  displayNaoObrigatorio = false;
  
  disableDropdownCidade = true;
  
  dropdownPeriodo = [];
  dropdownEstado: Uf[];
  dropdownCidade = [];
  dropdownSolucao = [];

  @Input() isCadastroCompleto = true;

  constructor(protected messageService: MessageService, 
    private router: Router,  
    private fb: FormBuilder, 
    private _serviceDominio: DominioService) {
    super();  
    this.select = [];
    this.select.push({ label: 'Selecione', value: '1' });
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      plantonistaNome: [null],
      plantonista: [null],
      identificacaoRdo: [null],
      localizacao: [null],
      apresentacaoOcorrencia: [null],
      solucaoComponent: [null]
    });
  } 

  ngAfterViewInit() {
    this.formGroup.setControl('identificacaoRdo', this.identificacaoRdoComponent.formGroup);
    this.formGroup.setControl('localizacao', this.localizacaoComponent.formGroup);
    this.formGroup.setControl('apresentacaoOcorrencia', this.apresentacaoOcorrenciaComponent.formGroup);
    this.formGroup.setControl('solucaoComponent', this.solucaoComponent.formGroup);
  }

  get identificacaoRdo() : FormGroup {
    return <FormGroup> this.formGroup.get('identificacaoRdo');
  }

  get localizacao() : FormGroup {
    return <FormGroup> this.formGroup.get('localizacao');
  }

  get apresentacaoOcorrencia() : FormGroup {
    return <FormGroup> this.formGroup.get('apresentacaoOcorrencia');
  }

  handleTipoBoChange(event) {
    this.tipoBo = event;  
  }

  showSuccess() {
    console.log('showSucess');

    this.validateControls();

    console.log(this.formGroup);

    //console.log(this.getAllFormValidationErrors());

    let bo : Bo = new Bo();
    bo.numeroBo = 10;
    bo.anoBo = 2019;
    bo.dataComunicacao = new Date();
    bo.autoria = Autoria.Conhecida;
    bo =  this.formGroup.value; 

    let formValues = this.formGroup.value;
    
    //console.log(this.identificacaoRdo);
    //console.log(this.apresentacaoOcorrencia);

    Object.keys(formValues).forEach(function(key) {
     if (key in bo) {
        bo[key] = formValues[key];
      }
    });

    console.log('BO teste', bo);

    //console.log('BO Class', bo);
    

    if (this.formGroup.valid) {
      this.messageService.add({ severity: 'success', summary: 'Registro salvo com sucesso', detail: 'RDO gerado' });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Erro ao validar', detail: 'Preencha todos os campos obrigatórios (*) antes de prosseguir' });
    }
  }

  // carrega combo de Estados
  loadDropdownUf(){
    this._serviceDominio.listUf().subscribe(result => {
      let content:Uf[] = result.content;
      this.dropdownEstado = content;

      //TODO:DNS REMOVER_INICIO, apenas para testes enquanto o MicroServiço não esta retornando resultados
      let sp = new Uf();
      sp.nome = "São Paulo";
      this.dropdownEstado.push(sp);

      let mg = new Uf();
      mg.nome = "Minas Gerais";
      this.dropdownEstado.push(mg);

      let rj = new Uf();
      rj.nome = "Rio de Janeiro";
      this.dropdownEstado.push(rj);
      //TODO:DNS REMOVER_FIM, apenas para testes enquanto o MicroServiço não esta retornando resultados

    }, error => {
      console.log(error);
    });
  }

  // Carrega combo de Cidade
  loadDropdownCidade(){

    // TODO:DNS buscar as cidades na base de acordo com o Estado selecionado
    this.dropdownCidade = [
      {nome: "São Paulo"},
      {nome: "Diadema"},
      {nome: "Valinhos"},
      {nome: "Vinhedo"}
    ];
  }

  //Carrega combo Tipo de Documento //TODO:DNS recuperar da base
  //loadDropdownTipoDocumento(){
    //this.dropdownTipoDocumento = [{nome: "Termo Circunstanciado"}, {nome: "Boletim de ocorrência"}];
 // }


  //metodo disparado no onChange no combo "Estado"
  onChangeEstado(){
    //this.disableDropdownCidade = this.getValueFieldOfForm("estado") == null;
    //this.setNullValueToFormField("cidade");

    // TODO:DNS buscar as cidades na base de acordo com o Estado selecionado
    if(!this.disableDropdownCidade){
      this.loadDropdownCidade();
    }
  }
  //Confirmar cadastro rapido
  showConfirm(value: string) {
    this.submitted = true;
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Você tem certeza?', detail:'Deseja confirmar para prosseguir'});
  }

  //Salvar cadastro de Bo rápido e carregar cadastro completo
  onConfirm() {
    this.messageService.clear('c');
    this.router.navigate(['/cadastro-completo']);
  }

  //Rejeitar
  onReject() {
    this.messageService.clear('c');
  }
  
  //Apagar
  clear() {
    this.messageService.clear();
  }

  // callBack do dialog(Buscar plantonista), responsável por fechar o dialog
  // e settar o plantonistar selecionado no form da pagina
  onBindPlantonista(event:Plantonista){
    if(event){
     // this.setValueField("plantonistaNome", event.usuario);
      //this.setValueField("plantonista", event);
    }
    
    this.displayDialogPlantonista = false;
  }
}