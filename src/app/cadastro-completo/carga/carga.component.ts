import { CargaService } from './carga.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  //Carga
  displayDialogCarga = false;
  CargaService: CargaService;
  selecionaCarga; carga; tipoCarga; subtipoCarga; modoCarga: any;
  select: any;
  selected: string;
  SelecionaSim: string = '1';
  SelecionaNao: string = '2';
  items: any;

  constructor() {
    this.select = [];
    this.select.push({ label: 'Selecione', value: '1' });
    //Carga
    this.CargaService = new CargaService();
  }

  ngOnInit() {
    //Carga
    this.carga = this.CargaService.getCarga();
    this.tipoCarga = this.CargaService.getTipoCarga();
    this.subtipoCarga = this.CargaService.getSubtipoCarga();
    this.modoCarga = this.CargaService.getModoCarga();

    //Botão Excluir
    this.items = [
    {label: 'Excluir', icon: 'fa fa-close', routerLink: ['/setup']}
    ];
  }

}
