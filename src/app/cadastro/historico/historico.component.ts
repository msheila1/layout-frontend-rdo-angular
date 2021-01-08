import { Component, OnInit, Input, Output, EventEmitter,OnDestroy } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AbstractComponent } from "src/app/shared/components/utils/abstract-component";
import { MessageService, ConfirmationService } from "primeng/api";
import { Historico } from "src/app/models/historico.model";
import { HistoricoService } from "src/app/core/services/historico.service";
import { PollService } from "src/app/services/poll/poll.component";
import { PollInterface } from "src/app/services/poll/poll.interface";

const MAX_DIGITS = 1000000;

@Component({
  selector: "app-historico",
  templateUrl: "./historico.component.html",
  styleUrls: ["./historico.component.css"],
  providers: [ConfirmationService]
})
export class HistoricoComponent extends AbstractComponent implements OnInit, OnDestroy, PollInterface {
  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  valEditor: string;
  countLetters: number = MAX_DIGITS;

  constructor(
    private _fb: FormBuilder,
    protected messageService: MessageService,
    private historicoService: HistoricoService,
    private confirmationService: ConfirmationService,
    private _pollService: PollService
  ) {
    super();
  }

  ngOnInit() {
    this.historicoService.historicoSaveEvent.subscribe(b => this._pollService.create(120000, this));
    this.historicoService.historicoStopEvent.subscribe(b => this._pollService.stop());

    this.formGroup = this._fb.group({
      id: [null],
      historico: [null, [Validators.required]]
    });
  }

  ngOnDestroy(): void {
    this._pollService.stop();
  }

  pollAction() {
    this.insert();
  }

  insert(): void {
    const historico = new Historico();
    historico.id = this.id.value;
    historico.historico = this.historico.value;

    this.formGroup.get("historico").value as string;
    this.historicoService.create(historico).subscribe(() => {
      if (this.formGroup.valid) {
        this.messageService.add({ 
        severity: "success", 
        summary: "Registro salvo com sucesso", 
        detail: ""
        });
      } else {
        this.messageService.add({ 
        severity: "error", 
        summary: "Erro ao validar", 
        detail: "Campo obrigatório Histórico não informado."
        });
      }
    });
  }

  saveForm() {
    this.insert();
  }

  confirm() {
    this.confirmationService.confirm({
      message: "Deseja cancelar este cadastro?",
      header: "Confirmação",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.formGroup.reset();
      }
    });
  }

  //Contador de caracteres
  counter() {
    this.countLetters = MAX_DIGITS - this.valEditor.length;
  }

  get id() {
    return this.formGroup.get("id");
  }

  get historico() {
    return this.formGroup.get("historico");
  }
}
