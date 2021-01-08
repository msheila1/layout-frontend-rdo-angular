import {ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Plantonista } from 'src/app/models/plantonista.model';

@Component({
  selector: 'app-plantonistas',
  templateUrl: './plantonistas.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlantonistasComponent {

  @Input() plantonistas: Plantonista[];
  @Input() plantonistasSelecionados: Plantonista[];

}
