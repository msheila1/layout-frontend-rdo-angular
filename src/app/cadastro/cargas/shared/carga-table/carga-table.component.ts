import { Component, OnInit, Input, ChangeDetectionStrategy } from "@angular/core";
import { AbstractComponent } from "src/app/shared/components/utils/abstract-component";
import { ModoCarga } from 'src/app/models/modo-carga.model';
import { Carga } from 'src/app/models/carga.model';
import { Observable } from 'rxjs';
import { MenuItem } from 'primeng/api';


@Component({
  selector: "app-carga-table",
  templateUrl: "./carga-table.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CargaTableComponent extends AbstractComponent implements OnInit {

  @Input() carga: Carga[];
  
  showCarga = false;

  constructor() {
    super()
  }

  ngOnInit() {
  }

  loadEditar(idCarga: number) {
    this.showCarga = true;
  }

  getButtonActions(idCarga: number): MenuItem[] {
    let buttonActionItems = [
      {
        label: 'Editar', icon: 'pi pi-refresh', command: () => {
          this.loadEditar(idCarga);
          console.log('*************************************************');
        }
      },
      {
        label: 'Delete', icon: 'pi pi-times', command: () => {
          console.log('*************************************************');
        }
      }
    ];

    return buttonActionItems;
  }


}
