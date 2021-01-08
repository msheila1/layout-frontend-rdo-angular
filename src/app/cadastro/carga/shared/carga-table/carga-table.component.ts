import { Component, OnInit, Input } from "@angular/core";
import { AbstractComponent } from "src/app/shared/components/utils/abstract-component";
import { Observable } from 'rxjs';
import { CargaService } from 'src/app/core/services/carga.service';
import { Carga } from 'src/app/models/carga.model';
import { MenuItem } from 'primeng/api';


@Component({
  selector: "app-carga-table",
  templateUrl: "./carga-table.component.html",
})
export class CargaTableComponent extends AbstractComponent implements OnInit {

  @Input() carga$: Observable<Carga[]>;
  showCarga = false;

  constructor(private _cargaService: CargaService) {
    super()
  }

  ngOnInit() {
    this.loadListCarga();
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

  loadListCarga() {
    this.carga$ = this._cargaService.listByCarga();
  }

}
