import { PlantaoAbertoService } from './plantao-aberto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-plantoes-abertos',
  templateUrl: './table-plantoes-abertos.component.html',
  styleUrls: ['./table-plantoes-abertos.component.css']
})
export class TablePlantoesAbertosComponent implements OnInit {

  //Plantão
  PlantaoAbertoService: PlantaoAbertoService;
  selecionaDelegacia: any;
  plantaoAberto; delegado; hora: any;
  items: any;
  displayPlantao = false;


  constructor() {
    //Plantão
    this.PlantaoAbertoService = new PlantaoAbertoService();
  }

  ngOnInit() {
    //Pessoa
    this.plantaoAberto = this.PlantaoAbertoService.getPlantaoAberto();
    this.delegado = this.PlantaoAbertoService.getDelegado();
    this.hora = this.PlantaoAbertoService.getHora();    
  }

}
