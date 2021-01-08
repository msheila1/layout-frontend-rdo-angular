import { PessoaService } from './pessoa.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  @Input() isCampoNaoObrigatorio = true;

  @Input() isCadastroCompleto = true;
  //Pessoa
  PessoaService: PessoaService;
  selecionaPessoas: any;
  pessoas; rg; tipoPessoa; endereco; telefone: any;
  SelectButton1: string = '1';
  SelectButton2: string = '2';
  SelectButton3: string = '3';
  items: any;
  displayDialogPessoa = false;
  select: any[];
  selected: string;


  constructor() {
    this.select = [];
    this.select.push({ label: 'Selecione', value: '1' });
    //Pessoa
    this.PessoaService = new PessoaService();
  }

  ngOnInit() {
    //Pessoa
    this.pessoas = this.PessoaService.getPessoas();
    this.rg = this.PessoaService.getRg();
    this.tipoPessoa = this.PessoaService.getTipoPessoa();


    //Botões Ações
    this.items = [
      {label: 'Editar', icon: 'fa fa-edit', command: () => {
        this.editar();
    }},
      {label: 'Excluir', icon: 'fa fa-close',routerLink: ['']}
    ];
  }
  editar() {
    this.displayDialogPessoa = true;};
}
