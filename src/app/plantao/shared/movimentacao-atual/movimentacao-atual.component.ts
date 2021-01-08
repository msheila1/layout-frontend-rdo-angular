import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Plantao } from '../../../models/plantao.model';
import { Plantonista } from 'src/app/models/plantonista.model';

@Component({
  selector: 'app-movimentacao-atual',
  templateUrl: './movimentacao-atual.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovimentacaoAtualComponent {

  @Input() values: any;

  @Input() plantao: Plantao[];
  @Input() plantonista: Plantonista[];
  @Output() rowSelect = new EventEmitter<Plantonista>();

  private selectedModel: Plantonista;

  onRowSelect(event: any) {
    this.rowSelect.emit(event.data as Plantonista);
  }
}
