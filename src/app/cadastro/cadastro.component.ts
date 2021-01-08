import { Component, OnInit } from "@angular/core";
import { CadastroService } from "./cadastro.service";
import { MessageService } from "primeng/api";
import { HistoricoService } from '../core/services/historico.service';

const _tabHistoricoIndex = 0;

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
  providers: [MessageService]
})
export class CadastroCompletoComponent implements OnInit {
  // Geral
  disabled: Boolean = true;
  CadastroService: CadastroService;
  tipo: string[];
  selecionaCadastro: any[];
  ano: string[];
  numero: string[];
  digitador: string[];
  escrivao: string[];

  display: boolean = false;
  displayTipoDocumentos: boolean = false;
  displayExamePericia: boolean;
  displayImprimir: boolean;

  constructor(
    private messageService: MessageService,
    private _historicoService: HistoricoService) {
    // Cadastro Service
    this.CadastroService = new CadastroService();
  }

  showChegar() {
    this.display = true;
  }

  showTipoDocumentos() {
    this.displayTipoDocumentos = true;
  }

  showExamePericia() {
    this.displayExamePericia = true;
  }

  showImprimir() {
    this.displayImprimir = true;
  }

  ngOnInit() {
    // Cadastro Service
    this.tipo = this.CadastroService.getTipo();
    this.ano = this.CadastroService.getAno();
    this.numero = this.CadastroService.getNumero();
    this.digitador = this.CadastroService.getDigitador();
    this.escrivao = this.CadastroService.getEscrivao();
    this.selecionaCadastro = [];
  }

  showSuccess() {
    this.messageService.add({
      severity: "success",
      summary: "Success Message",
      detail: "Order submitted"
    });
  }

  showInfo() {
    this.messageService.add({
      severity: "info",
      summary: "Info Message",
      detail: "PrimeNG rocks"
    });
  }

  showConfirm() {
    this.messageService.clear();
    this.messageService.add({
      key: "c",
      sticky: true,
      severity: "warn",
      summary: "Dados importados com Sucesso.",
      detail:
        "*Campos em azul são os dados importados pelo pré-atendimento, e campos em vermelho são dados inconsistentes."
    });
  }

  onOpenTab(event) {
    if (event.index == _tabHistoricoIndex) {
      this._historicoService.historicoSaveEvent.emit();
    }
  }

  onCloseTab(event) {
    if (event.index == _tabHistoricoIndex) {
      this._historicoService.historicoStopEvent.emit();
    }
  }

  onConfirm() {
    this.messageService.clear("c");
  }

  onReject() {
    this.messageService.clear("c");
  }

  clear() {
    this.messageService.clear();
  }
}
