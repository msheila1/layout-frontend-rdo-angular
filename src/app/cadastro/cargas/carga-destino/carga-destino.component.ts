import { AbstractComponent } from 'src/app/shared/components/utils/abstract-component';
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";


@Component({
  selector: 'app-carga-destino',
  templateUrl: './carga-destino.component.html',
  styleUrls: ['./carga-destino.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CargaDestinoComponent extends AbstractComponent implements OnInit{

  constructor() {
    super()
  }

  ngOnInit() {
  }
}
