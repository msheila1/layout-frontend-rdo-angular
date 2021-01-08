import { PessoaJuridicaService } from './pessoajuridica.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoajuridica',
  templateUrl: './pessoajuridica.component.html',
  styleUrls: ['./pessoajuridica.component.css']
})
export class PessoajuridicaComponent implements OnInit {

  //Pessoa Jurídica
  displayDialogPessoaJuridica = false;
  PessoaJuridicaService: PessoaJuridicaService;
  selecionaPessoa; pessoajuridica; tipo; nome; ddd; telefone; operadora: any;
  select: any[];
  selected: string;

  constructor() {
    this.select = [];
    this.select.push({label:'Selecione', value:'1'});

    //Pessoa Juridica
    this.PessoaJuridicaService = new PessoaJuridicaService();
   }

  ngOnInit() {
    //Pessoa Jurídica
    this.pessoajuridica = this.PessoaJuridicaService.getPessoaJuridica();
    this.tipo = this.PessoaJuridicaService.getTipo();
    this.nome = this.PessoaJuridicaService.getNome();
    this.ddd = this.PessoaJuridicaService.getDdd();
    this.telefone = this.PessoaJuridicaService.getTelefone();
    this.operadora = this.PessoaJuridicaService.getOperadora();
  }

}
