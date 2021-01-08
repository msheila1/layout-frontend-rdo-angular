import {ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: 'app-home-grafico',
  templateUrl: './home-grafico.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeGraficoComponent {
  @Input() data: any[];
}
