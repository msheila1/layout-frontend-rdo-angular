import { DelegaciaService } from './delegacia.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-escolha-delegacia',
  templateUrl: './table-escolha-delegacia.component.html',
  styleUrls: ['./table-escolha-delegacia.component.css']
})
export class TableEscolhaDelegaciaComponent implements OnInit {

  //Plantão
  DelegaciaService: DelegaciaService;
  selecionaDelegacia: any;
  escolha; delegacia; entrada; saida: any;
  items: any;
  displayDialogPlantao = false;


  constructor() {
    //Plantão
    this.DelegaciaService = new DelegaciaService();
  }

  ngOnInit() {
    //Pessoa
    this.escolha = this.DelegaciaService.getPlantao();
    this.delegacia = this.DelegaciaService.getDelegacia();
    this.entrada = this.DelegaciaService.getEntrada();
    this.saida = this.DelegaciaService.getSaida();    
  }


}
