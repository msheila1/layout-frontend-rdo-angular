import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EnderecoPessoaService } from '../../../cadastro/pessoas/enderecoPessoa.service';

@Component({
  selector: 'app-table-endereco',
  templateUrl: './table-endereco.component.html',
  styleUrls: ['./table-endereco.component.css']
})
export class TableEnderecoComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  @Input() isCadastroCompleto = true;
  SelectButton1: string = '1';
  SelectButton2: string = '2';
  SelectButton3: string = '3';
  
  //Endereço - Pessoas
  displayDialogEndereco = false;
  EnderecoPessoaService: EnderecoPessoaService;
  selecionaEnderecoPessoa; enderecoPessoa; tipoEnd; logradouroEnd; numeroEnd: any;
 

  constructor() {
    //Endereço Pessoa
    this.EnderecoPessoaService = new EnderecoPessoaService();
  }

  ngOnInit() {
    //Endereço Pessoa
    this.enderecoPessoa = this.EnderecoPessoaService.getEnderecoPessoa();
    this.tipoEnd = this.EnderecoPessoaService.getTipoEnd();
    this.logradouroEnd = this.EnderecoPessoaService.getLogradouroEnd();
    this.numeroEnd = this.EnderecoPessoaService.getNumeroEnd();

  }

  onClose() {
    this.displayChange.emit(false);
  }

}
