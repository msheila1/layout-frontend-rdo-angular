import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { Plantao } from './../../../models/plantao.model';

@Component({
  selector: 'app-dialog-plantao',
  templateUrl: './dialog-plantao.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogPlantaoComponent{

  @Input() userPlantao: Plantao[];
  @Output() rowSelect = new EventEmitter<Plantao>();
  @Input() showPlantao: boolean = false;
  @Output() displayChange = new EventEmitter();

  private selectedModel: Plantao;

  
  onRowSelect(event: any) {
    this.rowSelect.emit(event.data as Plantao);
  }  

  onClose(){
    this.displayChange.emit(false);
  }

}
