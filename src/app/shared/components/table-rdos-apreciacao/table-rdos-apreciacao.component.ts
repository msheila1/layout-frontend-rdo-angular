import { PlantaoApreciacaoService } from './../../../services/plantao-apreciacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-rdos-apreciacao',
  templateUrl: './table-rdos-apreciacao.component.html',
  styleUrls: ['./table-rdos-apreciacao.component.css']
})
export class TableRdosApreciacaoComponent implements OnInit {

  PlantaoApreciacaoService: PlantaoApreciacaoService;
  selecionaDelegacia; rdosApreciacao; delegacia; ano; numero; delegado; escrivao: any;
 

  constructor() {
    this.PlantaoApreciacaoService = new PlantaoApreciacaoService();
  }

  ngOnInit() {
    this.rdosApreciacao = this.PlantaoApreciacaoService.getRdosApreciacao();
    this.delegacia = this.PlantaoApreciacaoService.getDelegacia();
    this.ano = this.PlantaoApreciacaoService.getAno();
    this.numero = this.PlantaoApreciacaoService.getNumero();
    this.delegado = this.PlantaoApreciacaoService.getDelegado();
    this.escrivao = this.PlantaoApreciacaoService.getEscrivao();

  }

}
