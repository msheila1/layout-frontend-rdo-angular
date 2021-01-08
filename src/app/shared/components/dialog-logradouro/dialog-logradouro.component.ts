import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dialog-logradouro',
  templateUrl: './dialog-logradouro.component.html',
  styleUrls: ['./dialog-logradouro.component.css']
})
export class DialogLogradouroComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  logradouro: {};
  cep: {};

  dropdownTipoLogradouro = [];

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    
    this.buildLograrouro();
    this.buildCep();

    this.loadDropdownTipoLogradouro();
  }

  // gera o objeto Logradouro vazio
  buildLograrouro(){
    this.logradouro = {
      tipo: "",
      logradouro: "",
      numero: ""
    }
  }

  // gera o objeto CEP vazio
  buildCep(){
    this.cep = {
      cep: "",
      numero: ""
    }
  }
  
  // Work against memory leak if component is destroyed
  /*
  ngOnDestroy() {
    this.displayChange.unsubscribe();
  }
  */
  

  onClose(){
    this.displayChange.emit(false);
  }
  
  //carrega combo de "Tipo" //TODO:DNS recuperar da base, solicitar micro serviço
  loadDropdownTipoLogradouro(){
    this.dropdownTipoLogradouro = [
      {nome: "Rua"},
      {nome: "Acampamento"},
      {nome: "Avenida"}
    ];
  }

  // metodo disparado no onClick do botão "Limpar busca", responsavel por limpar os valores preenchidos
  onClickLimpaBusca(){
    this.buildLograrouro();
    this.buildCep();
  }

  // metodo disparado no onClick do botão "Buscar" da seção Logradouro //TODO:DNS recuperar da base, montar micro serviço
  onClickBuscaLogradouro(){
    alert("Realizar busca seção Logradouro");
  }

  // metodo disparado no onClick do botão "Buscar" da seção CEP //TODO:DNS recuperar da base, montar micro serviço
  onClickBuscaCep(){
    alert("Realizar busca seção Cep");
  }

  // metodo disparado no onClick do botão "Confirmar" //TODO:DNS implementar o confirmar
  onClickConfirma(){
    this.displayChange.emit(false);
  }

}
