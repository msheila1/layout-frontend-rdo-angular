import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FerimentoPessoaService } from "../../../cadastro/pessoas/ferimentoPessoa.service";

@Component({
  selector: "app-accordion-ferimento",
  templateUrl: "./accordion-ferimento.component.html",
  styleUrls: ["./accordion-ferimento.component.css"]
})
export class AccordionFerimentoComponent implements OnInit {
  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  SelectButton1: string = "1";
  SelectButton2: string = "2";
  SelectButton3: string = "3";

  //Ferimento - Pessoas
  displayDialogFerimento = false;
  FerimentoPessoaService: FerimentoPessoaService;
  selecionaFerimento: any;
  FerimentoPessoa: any;
  ferimento: string[] = [];
  instrumento: string[] = [];

  constructor() {

    //Dados do Vítima - Ferimento
    this.FerimentoPessoaService = new FerimentoPessoaService();
  }

  ngOnInit() {
    //Dados da Vítima - Ferimento
    this.FerimentoPessoa = this.FerimentoPessoaService.getFerimentoPessoa();
    this.ferimento = this.FerimentoPessoaService.getFerimento();
    this.instrumento = this.FerimentoPessoaService.getInstrumento();
  }

  onClose() {
    this.displayChange.emit(false);
  }
}
