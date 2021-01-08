import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { LocalPessoaService } from "../../../cadastro/pessoas/localPessoa.service";

@Component({
  selector: "app-table-local-pessoa",
  templateUrl: "./table-local-pessoa.component.html",
  styleUrls: ["./table-local-pessoa.component.css"]
})
export class TableLocalPessoaComponent implements OnInit {
  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();
  SelectButton1: string = "1";
  SelectButton2: string = "2";
  SelectButton3: string = "3";

  //Local que Frequenta - Pessoas
  LocalPessoaService: LocalPessoaService;
  selecionaLocal; LocalPessoa; NomeLocal; PeriodoLocal; TipoLocal: any;

  constructor() {
    //Local que Frequenta
    this.LocalPessoaService = new LocalPessoaService();
  }

  ngOnInit() {
    //Local que frequenta
    this.LocalPessoa = this.LocalPessoaService.getLocalPessoa();
    this.NomeLocal = this.LocalPessoaService.getNomeLocal();
    this.PeriodoLocal = this.LocalPessoaService.getPeriodoLocal();
    this.TipoLocal = this.LocalPessoaService.getTipoLocal();

  }

  onClose() {
    this.displayChange.emit(false);
  }
}
