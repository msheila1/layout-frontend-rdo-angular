import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { TipoLocal } from '../models/tipo-local.model';
import { DominioService } from '../services/dominio.service';
import { SubTipoLocal } from '../models/subtipo-local.model';
import { Uf } from '../models/uf.model';
import { AutoCompleteGoogle } from '../models/autoCompleteGoogle.model';
import { AbstractComponent } from '../shared/components/utils/abstract-component';
import { Municipio } from '../models/municipio.model';

@Component({
  selector: 'app-cadastro-rapido',
  templateUrl: './cadastro-rapido.component.html',
  styleUrls: ['./cadastro-rapido.component.css'],
  providers: [MessageService]
})

export class CadastroRapidoComponent extends AbstractComponent implements OnInit {

  logradouroAutoComplete = new AutoCompleteGoogle(); //TODO:DNS nessário settar no formBuilder = "logradouro"

  disableDropdowSubTipoLocal = true;
  disableDropdownCidade = true;
  disabledApresentacaoOutros = true;

  dropdownTipoLocal: TipoLocal[];
  dropdownSubTipoLocal: SubTipoLocal[];
  dropdownEstado: Uf[];
  dropdownCidade = [];
  dropdownSolucao = [];


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _serviceDominio: DominioService
    ) {
    super();
  }

  ngOnInit() {

    //Validação de Formulário
    this.formGroup = this.fb.group({
      tipoLocal: [null, [Validators.required]],
      subTipoLocal: [null, [Validators.required]],
      route: [null, [Validators.required]], //logradouro
      numero: [null],
      complemento: [null],
      referencia: [null, [Validators.required]],
      referenciaLogradouro: [null],
      referenciaNumero: [null],
      apresentacaoOutros: [null],
      intoleranciaDiscriminacao: [null, [Validators.required]],
      tipoIntolerancia: [null],
      intoleranciaOutros: [null],
      solucao: [null]
    });

    this.loadDropdownTipoLocal();
    this.loadDropdownUf();
    this.loadDropdownSolucao();
  }

  // carrega o combo de Tipo de Local
  loadDropdownTipoLocal() {
    this._serviceDominio.listTipoLocal().subscribe(result => {
      this.dropdownTipoLocal = result;
    }, error => {
      console.log(error);
    });
  }

  //Carrega combo de Sub tipo do local
  loadDropdownSubTipoLocal(idTipoLocal: number) {
    //TODO:DNS refinar o combo de acordo com o "Tipo de Local" selecionado
    this._serviceDominio.listSubTipoLocal(idTipoLocal).subscribe(result => {
      this.dropdownSubTipoLocal = result;
    }, error => {
      console.log(error);
    });
  }

  // carrega combo de Estados
  loadDropdownUf() {
    this.dropdownEstado = this._serviceDominio.listUf();
  }

  // Carrega combo de Cidade
  loadDropdownCidade() {
    this._serviceDominio.listMunicipioByUf("SP").subscribe((result: Municipio[]) => {
      this.dropdownCidade = result;
    });
  }

  //Carrega combo "Solução" //TODO:DNS recuperar da base
  loadDropdownSolucao() {
    this.dropdownSolucao = [
      { nome: "AG representação/Requerimento" },
      { nome: "Aguardando laudos" },
      { nome: "Apreciação do delegado" }
    ]
  }

  //metodo disparado no onChange no combo "Estado"
  onChangeEstado() {
    //this.disableDropdownCidade = this.getFieldValue("estado") == null;
    // this.setNullValueToFormField("cidade");

    // TODO:DNS buscar as cidades na base de acordo com o Estado selecionado
    if (!this.disableDropdownCidade) {
      this.loadDropdownCidade();
    }
  }

  // metodo disparado no onChange do campo "Tipo do Local"
  // desabilita o campo "Subtipo do local" se o campo "Tipo do local" não for selecionado
  onChangeTipoLocal() {
    //this.disableDropdowSubTipoLocal = this.getFieldValue("tipoLocal") == null;
    //this.setNullValueToFormField("subTipoLocal");

    if (!this.disableDropdowSubTipoLocal) {
      this.loadDropdownSubTipoLocal(1); //TODO:DNS refinar o combo de acordo com o "Tipo de Local" selecionado
    }
  }

  // metodo disparado no onChange do combo "Apresentação da Ocorrência"
  onChageApresentacaoOutros() {
    // let apresentacaoOcorrencia:ApresentacaoOcorrencia = this.getFieldValue("apresentacaoOcorrencia");
    //this.disabledApresentacaoOutros = (!apresentacaoOcorrencia || apresentacaoOcorrencia.descricao != "Por outros"); //TODO:DNS definir se será pelo ID ou Descricao do campo

    // Caso a opção selecionada no combo(Apresentação da Ocorrência) for "Por outros", 
    // habilita o campo "Apresentação da Ocorrência (Outros)" para edição
    if (this.disabledApresentacaoOutros) {
      //this.setNullValueToFormField("apresentacaoOutros");
    }
  }

  //Salvar cadastro de Bo rápido e carregar cadastro completo
  onConfirm() {
    this.messageService.clear('c');
    this.router.navigate(['/cadastro']);
  }

  //Rejeitar
  onReject() {
    this.messageService.clear('c');
  }

  //Apagar
  clear() {
    this.messageService.clear();
  }

}