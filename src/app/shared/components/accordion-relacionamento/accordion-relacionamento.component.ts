import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { RelacionamentoPessoaService } from "../../../cadastro/pessoas/relacionamentoPessoa.service";


@Component({
  selector: "app-accordion-relacionamento",
  templateUrl: "./accordion-relacionamento.component.html",
  styleUrls: ["./accordion-relacionamento.component.css"]
})
export class AccordionRelacionamentoComponent implements OnInit {
  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  SelectButton1: string = "1";
  SelectButton2: string = "2";
  SelectButton3: string = "3";

  //Grau de Relacionamento - Pessoas
  displayDialogRelacionamento = false;
  RelacionamentoPessoaService: RelacionamentoPessoaService;
  selecionaRelacionamento: any;
  relacionamento: any;
  autoresVitima: string[] = [];
  grauVitima: string[] = [];
  
  constructor() {
    //Dados do Vítima - Grau de Relacionamento
    this.RelacionamentoPessoaService = new RelacionamentoPessoaService();
  }

  ngOnInit() {
    //Dados da Vítima - Grau de Relacionamento
    this.relacionamento = this.RelacionamentoPessoaService.getRelacionamento();
    this.autoresVitima = this.RelacionamentoPessoaService.getAutoresVitima();
    this.grauVitima = this.RelacionamentoPessoaService.getGrauVitima();

  }

  onClose() {
    this.displayChange.emit(false);
  }
}
