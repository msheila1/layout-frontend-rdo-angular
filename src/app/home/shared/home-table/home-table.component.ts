import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { Rdo } from '../../../models/rdo.model';

@Component({
  selector: 'app-home-table',
  templateUrl: './home-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeTableComponent {  
  @Input() show: boolean;
  @Input() seta: boolean;
  @Input() icone: boolean;
  @Input() value: Rdo[];
  @Output() rowSelect = new EventEmitter<Rdo>();

  private selectedModel: Rdo;

  constructor() {}

  onRowSelect(event: any) {
    this.rowSelect.emit(event.data as Rdo);
  }
}
