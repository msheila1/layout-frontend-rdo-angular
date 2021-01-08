import { PlantaoOutrosService } from './../../../services/plantao-outros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-rdos-outros',
  templateUrl: './table-rdos-outros.component.html',
  styleUrls: ['./table-rdos-outros.component.css']
})
export class TableRdosOutrosComponent implements OnInit {

  PlantaoOutrosService: PlantaoOutrosService;
  selecionaDelegacia; rdosOutros; delegacia; ano; numero; delegado; escrivao: any;
 

  constructor() {
    this.PlantaoOutrosService = new PlantaoOutrosService();
  }

  ngOnInit() {
    this.rdosOutros = this.PlantaoOutrosService.getRdosOutros();
    this.delegacia = this.PlantaoOutrosService.getDelegacia();
    this.ano = this.PlantaoOutrosService.getAno();
    this.numero = this.PlantaoOutrosService.getNumero();
    this.delegado = this.PlantaoOutrosService.getDelegado();
    this.escrivao = this.PlantaoOutrosService.getEscrivao();

  }

}
