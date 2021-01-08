import {ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeCardComponent {
  
  @Input() titulo: string;
  @Input() value: number;     
}
