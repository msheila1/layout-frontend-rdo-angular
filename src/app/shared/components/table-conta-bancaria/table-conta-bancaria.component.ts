import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ContaBancariaPessoaService } from "../../../cadastro/pessoas/contaBancariaPessoa.service";

@Component({
  selector: "app-table-conta-bancaria",
  templateUrl: "./table-conta-bancaria.component.html",
  styleUrls: ["./table-conta-bancaria.component.css"]
})
export class TableContaBanariaComponent implements OnInit {
  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();
  SelectButton1: string = "1";
  SelectButton2: string = "2";
  SelectButton3: string = "3";

  //Conta Bancária - Pessoas
  ContaBancariaPessoaService: ContaBancariaPessoaService;
  selecionaContaBancariaPessoa; ContaBancariaPessoa; BancoPessoa; AgenciaPessoa; ContaPessoa: any;

  constructor() {
    //Conta Bancária - Pessoa
    this.ContaBancariaPessoaService = new ContaBancariaPessoaService();
  }

  ngOnInit() {

    //Conta Bancária - Pessoa
    this.ContaBancariaPessoa = this.ContaBancariaPessoaService.getContaBancariaPessoa();
    this.BancoPessoa = this.ContaBancariaPessoaService.getBancoPessoa();
    this.AgenciaPessoa = this.ContaBancariaPessoaService.getAgenciaPessoa();
    this.ContaPessoa = this.ContaBancariaPessoaService.getContaPessoa();

  }


  onClose() {
    this.displayChange.emit(false);
  }
}
