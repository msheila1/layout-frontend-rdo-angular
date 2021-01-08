import { PlantaoAbertoService } from './../../../services/plantao-aberto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-rdos-aberto',
  templateUrl: './table-rdos-aberto.component.html',
  styleUrls: ['./table-rdos-aberto.component.css']
})
export class TableRdosAbertoComponent implements OnInit {

  PlantaoAbertoService: PlantaoAbertoService;
  selecionaDelegacia; rdosAberto; delegacia; ano; numero; delegado; escrivao: any;
 

  constructor() {
    this.PlantaoAbertoService = new PlantaoAbertoService();
  }

  ngOnInit() {
    this.rdosAberto = this.PlantaoAbertoService.getRdosAberto();
    this.delegacia = this.PlantaoAbertoService.getDelegacia();
    this.ano = this.PlantaoAbertoService.getAno();
    this.numero = this.PlantaoAbertoService.getNumero();
    this.delegado = this.PlantaoAbertoService.getDelegado();
    this.escrivao = this.PlantaoAbertoService.getEscrivao();

  }


}
