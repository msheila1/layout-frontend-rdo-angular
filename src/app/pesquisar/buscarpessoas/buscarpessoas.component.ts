import { BuscarPessoaService } from './buscarPessoa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscarpessoas',
  templateUrl: './buscarpessoas.component.html',
  styleUrls: ['./buscarpessoas.component.css']
})

export class BuscarpessoasComponent implements OnInit {

  BuscarPessoaService: BuscarPessoaService;
  buscarPessoa; origem; delegacia; ano; numero; tipo; nome; situacao: any;
  items: any;
  
  constructor() {
    this.BuscarPessoaService = new BuscarPessoaService();
   }

  ngOnInit() {
    this.buscarPessoa = this.BuscarPessoaService.getBuscarPessoa();
    this.origem = this.BuscarPessoaService.getOrigem();
    this.delegacia = this.BuscarPessoaService.getDelegacia();
    this.ano = this.BuscarPessoaService.getAno();
    this.numero = this.BuscarPessoaService.getNumero();
    this.tipo = this.BuscarPessoaService.getTipo();
    this.nome = this.BuscarPessoaService.getNome();
    this.situacao = this.BuscarPessoaService.getSituacao();
    this.items = [
      {label: 'Visualizar RDO', icon: 'pi pi-search', routerLink: ['']},
      {label: 'Visualizar Fotos', icon: 'pi pi-user', routerLink: ['']},
      {label: 'Folha de Antecedentes', icon: 'pi pi-file', routerLink: ['']}
  ];
}



}
