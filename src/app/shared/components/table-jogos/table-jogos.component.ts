import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { JogosPessoaService } from "../../../cadastro/pessoas/JogosPessoa.service";

@Component({
  selector: "app-table-jogos",
  templateUrl: "./table-jogos.component.html",
  styleUrls: ["./table-jogos.component.css"]
})
export class TableJogosComponent implements OnInit {
  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();
  SelectButton1: string = "1";
  SelectButton2: string = "2";
  SelectButton3: string = "3";

  //Jogos - Pessoas
  JogosPessoaService: JogosPessoaService;
  selecionaJogo: any;
  Jogo: any;
  TipoJogo: string[] = [];

  constructor() {
    //Jogos
    this.JogosPessoaService = new JogosPessoaService();
  }

  ngOnInit() {
    //Jogos
    this.Jogo = this.JogosPessoaService.getJogo();
    this.TipoJogo = this.JogosPessoaService.getTipoJogo();
  }

  onClose() {
    this.displayChange.emit(false);
  }
}
