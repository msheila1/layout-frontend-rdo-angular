import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit, AfterViewInit } from '@angular/core';
import { Plantao } from 'src/app/models/plantao.model';
import { Plantonista } from 'src/app/models/plantonista.model';

@Component({
  selector: 'app-plantao-anterior',
  templateUrl: './plantao-anterior.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlantaoAnteriorComponent {

  @Input() values: any;
  @Input() plantao: Plantao;
  @Input() plantonista: Plantonista[];
  @Output() rowSelect = new EventEmitter<Plantonista>();

  private selectedModel: Plantonista;

  onRowSelect(event: any) {
    this.rowSelect.emit(event.data as Plantonista);
  }
}


