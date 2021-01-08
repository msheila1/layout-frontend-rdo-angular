import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ToxicoPessoaService } from "../../../cadastro/pessoas/toxicoPessoa.service";

@Component({
  selector: "app-table-toxico",
  templateUrl: "./table-toxico.component.html",
  styleUrls: ["./table-toxico.component.css"]
})
export class TableToxicoComponent implements OnInit {
  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();
  SelectButton1: string = "1";
  SelectButton2: string = "2";
  SelectButton3: string = "3";

  //Tóxico - Pessoas
  ToxicoPessoaService: ToxicoPessoaService;
  selecionaToxico; Toxico; TipoToxico: any;

  constructor() {
    //Tóxico
    this.ToxicoPessoaService = new ToxicoPessoaService();
  }

  ngOnInit() {
    //Tóxico
    this.Toxico = this.ToxicoPessoaService.getToxico();
    this.TipoToxico = this.ToxicoPessoaService.getTipoToxico();
  }

  onClose() {
    this.displayChange.emit(false);
  }
}
