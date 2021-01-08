import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CartaoCreditoPessoaService } from "../../../cadastro/pessoas/cartaoCreditoPessoa.service";

@Component({
  selector: "app-table-cartao-credito",
  templateUrl: "./table-cartao-credito.component.html",
  styleUrls: ["./table-cartao-credito.component.css"]
})
export class TableCartaoCreditoComponent implements OnInit {
  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();
  SelectButton1: string = "1";
  SelectButton2: string = "2";
  SelectButton3: string = "3";

  //Cartão de Crédito - Pessoas
  CartaoCreditoPessoaService: CartaoCreditoPessoaService;
  selecionaCartaoCreditoPessoa; CartaoCreditoPessoa; NomePessoaCartao; NumeroPessoa; ValidadePessoa: any;

  constructor() {
    //Cartão de Crédito - Pessoa
    this.CartaoCreditoPessoaService = new CartaoCreditoPessoaService();
  }

  ngOnInit() {
    //Cartão de Crédito - Pessoa
    this.CartaoCreditoPessoa = this.CartaoCreditoPessoaService.getCartaoCreditoPessoa();
    this.NomePessoaCartao = this.CartaoCreditoPessoaService.getNomePessoaCartao();
    this.NumeroPessoa = this.CartaoCreditoPessoaService.getNumeroPessoa();
    this.ValidadePessoa = this.CartaoCreditoPessoaService.getValidadePessoa();

  }


  onClose() {
    this.displayChange.emit(false);
  }
}
