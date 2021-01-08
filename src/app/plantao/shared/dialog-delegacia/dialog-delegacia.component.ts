import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { Delegacia } from '../../../models/plantao.model';

@Component({
  selector: 'app-dialog-delegacia',
  templateUrl: './dialog-delegacia.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogDelegaciaComponent{
  
  @Input() delegaciaPlantao: Delegacia[];
  @Output() rowSelect = new EventEmitter<Delegacia>();
  @Input() display: boolean;
  @Output() show = new EventEmitter();

  private selectedModel: Delegacia;

  
  onRowSelect(event: any) {
    this.rowSelect.emit(event.data as Delegacia);
  }  

  onClose(){
    this.show.emit(false);
  }

 

}
