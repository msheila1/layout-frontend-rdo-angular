import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CoacaoPessoaService } from "../../../cadastro/pessoas/coacaoPessoa.service";

@Component({
  selector: "app-accordion-coacao",
  templateUrl: "./accordion-coacao.component.html",
  styleUrls: ["./accordion-coacao.component.css"]
})
export class AccordionCoacaoComponent implements OnInit {
  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  SelectButton1: string = "1";
  SelectButton2: string = "2";
  SelectButton3: string = "3";

  //Coação - Pessoas
  displayDialogCoacao = false;
  CoacaoPessoaService: CoacaoPessoaService;
  selecionaCoacaoAutor: any;
  CoacaoAutor: any;
  tipoCoacao: string[] = [];

  constructor() {
    //Dados do Autor - Coação
    this.CoacaoPessoaService = new CoacaoPessoaService();
  }

  ngOnInit() {
    //Dados do Autor - Coação
    this.CoacaoAutor = this.CoacaoPessoaService.getCoacaoAutor();
    this.tipoCoacao = this.CoacaoPessoaService.getTipoCoacao();
  }

  onClose() {
    this.displayChange.emit(false);
  }
}
