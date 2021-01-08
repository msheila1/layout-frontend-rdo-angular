import { PlantaoService } from './plantao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-plantao',
  templateUrl: './table-plantao.component.html',
  styleUrls: ['./table-plantao.component.css']
})
export class TablePlantaoComponent implements OnInit {

  //Plantão
  PlantaoService: PlantaoService;
  selecionaPlantao: any;
  plantao; usuario; entrada; saida: any;
  items: any;
  displayDialogPlantao = false;


  constructor() {
    //Plantão
    this.PlantaoService = new PlantaoService();
  }

  ngOnInit() {
    //Pessoa
    this.plantao = this.PlantaoService.getPlantao();
    this.usuario = this.PlantaoService.getUsuario();
    this.entrada = this.PlantaoService.getEntrada();
    this.saida = this.PlantaoService.getSaida();    
  }

}
