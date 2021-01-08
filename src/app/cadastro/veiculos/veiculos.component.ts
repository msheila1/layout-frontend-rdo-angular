import { Observable } from 'rxjs';
import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { VeiculoService } from './veiculo.service';
import { Veiculo } from 'src/app/models/veiculo.model';
import { MenuItem } from 'primeng/api';
import { copy } from 'src/app/shared/models/abstract.model';
import { VeiculoRegisterComponent } from './shared/registro/veiculo-register.component';


@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {


  @ViewChild(VeiculoRegisterComponent) veiculoRegisterComponent : VeiculoRegisterComponent;

  idUserLogado = "1";
  veiculos$: Observable<Veiculo[]>;
  veiculoSelecionado: Veiculo;
  displayDialogVeiculo = false;

  constructor(private _veiculoService: VeiculoService) { }

  ngOnInit() {
    this.loadListVeiculos();
  }
  ngAfterViewInit(): void {
  }

  openNew() {
    this.veiculoRegisterComponent.newForm();
    this.displayDialogVeiculo = true;
  }

  loadEditar(idVeiculo: number) {
    this.veiculoRegisterComponent.loadUpdateForm(idVeiculo);
    this.displayDialogVeiculo = true;
  }

  getButtonActions(idVeiculo: number) : MenuItem[] {
    let buttonActionItems = [
      {
        label: 'Update', icon: 'pi pi-refresh', command: () => {
          this.loadEditar(idVeiculo);
        }
      },
      {
        label: 'Delete', icon: 'pi pi-times', command: () => {
          //console.log(this.veiculoSelecionado);
          console.log('*************************************************');
          let v = new Veiculo();
          //v.id = 10;
          //v.placa = 'abc1212';
          copy({id: 2, placa: 'XXX9999', lala: 'asd'}, v);
          console.log(v.placa);
          console.log(v);
        }
      }
    ];

    return buttonActionItems;
  }

  private loadListVeiculos() {
    this.veiculos$ = this._veiculoService.listVeiculosByUser(this.idUserLogado);
  }
}