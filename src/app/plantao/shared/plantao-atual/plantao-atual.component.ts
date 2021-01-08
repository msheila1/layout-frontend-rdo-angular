import {ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Plantao } from 'src/app/models/plantao.model';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-plantao-atual',
  templateUrl: './plantao-atual.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlantaoAtualComponent {

  @Input() plantao: Plantao;
  @Input() usuario: Usuario;
}
