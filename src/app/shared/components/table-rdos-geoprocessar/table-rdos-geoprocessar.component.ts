import { PlantaoGeoprocessarService } from './../../../services/plantao-geoprocessar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-rdos-geoprocessar',
  templateUrl: './table-rdos-geoprocessar.component.html',
  styleUrls: ['./table-rdos-geoprocessar.component.css']
})
export class TableRdosGeoprocessarComponent implements OnInit {

  PlantaoGeoprocessarService: PlantaoGeoprocessarService;
  selecionaDelegacia; rdosGeoprocessar; delegacia; ano; numero; delegado; escrivao: any;
 

  constructor() {
    this.PlantaoGeoprocessarService = new PlantaoGeoprocessarService();
  }

  ngOnInit() {
    this.rdosGeoprocessar = this.PlantaoGeoprocessarService.getRdosGeoprocessar();
    this.delegacia = this.PlantaoGeoprocessarService.getDelegacia();
    this.ano = this.PlantaoGeoprocessarService.getAno();
    this.numero = this.PlantaoGeoprocessarService.getNumero();
    this.delegado = this.PlantaoGeoprocessarService.getDelegado();
    this.escrivao = this.PlantaoGeoprocessarService.getEscrivao();

  }

}
