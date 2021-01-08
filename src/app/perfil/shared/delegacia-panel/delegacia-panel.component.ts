import {Component, Input, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: 'app-delegacia-panel',
  templateUrl: './delegacia-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DelegaciaPanelComponent {
  
  @Input() value: any;
  
  constructor() {}
 
  ngOnInit() {
  }

}
