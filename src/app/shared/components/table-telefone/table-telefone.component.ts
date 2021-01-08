import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TelefonePessoaService } from "../../../cadastro/pessoas/telefonePessoa.service";

@Component({
  selector: "app-table-telefone",
  templateUrl: "./table-telefone.component.html",
  styleUrls: ["./table-telefone.component.css"]
})
export class TableTelefoneComponent implements OnInit {
  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();
  SelectButton1: string = "1";
  SelectButton2: string = "2";
  SelectButton3: string = "3";

  //Telefone - Pessoas
  displayDialogTelefone = false;
  TelefonePessoaService: TelefonePessoaService;
  selecionaTelefonePessoa; telefonePessoa; operadoraTel; dddTel; numeroTel; ramalTel: any;

  constructor() {
    //Telefone Pessoa
    this.TelefonePessoaService = new TelefonePessoaService();
  }

  ngOnInit() {
    //Telefone Pessoa
    this.telefonePessoa = this.TelefonePessoaService.getTelefonePessoa();
    this.operadoraTel = this.TelefonePessoaService.getOperadoraTel();
    this.dddTel = this.TelefonePessoaService.getDddTel();
    this.numeroTel = this.TelefonePessoaService.getNumeroTel();
    this.ramalTel = this.TelefonePessoaService.getRamalTel();
  }

  onClose() {
    this.displayChange.emit(false);
  }
}
