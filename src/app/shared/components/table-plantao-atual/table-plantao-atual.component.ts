import { PlantaoAtualService } from './plantao-atual.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-plantao-atual',
  templateUrl: './table-plantao-atual.component.html',
  styleUrls: ['./table-plantao-atual.component.css']
})
export class TablePlantaoAtualComponent implements OnInit {

  //Plantão
  PlantaoAtualService: PlantaoAtualService;
  selecionaPlantaoAtual: any;
  plantaoAtual; usuario; rg; entrada; saida; emUso: any;
  items: any;
  

  constructor() {
    //Plantão
    this.PlantaoAtualService = new PlantaoAtualService();
  }

  ngOnInit() {
    //Pessoa
    this.plantaoAtual = this.PlantaoAtualService.getPlantaoAtual();
    this.usuario = this.PlantaoAtualService.getUsuario();
    this.rg = this.PlantaoAtualService.getRg();
    this.entrada = this.PlantaoAtualService.getEntrada();
    this.saida = this.PlantaoAtualService.getSaida();    
    this.emUso = this.PlantaoAtualService.getEmUSo();
  }

}
