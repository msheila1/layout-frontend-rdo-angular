import { BuscarVeiculosService } from './buscarVeiculos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscarVeiculos',
  templateUrl: './buscarVeiculos.component.html',
  styleUrls: ['./buscarVeiculos.component.css']
})

export class BuscarVeiculosComponent implements OnInit {

  BuscarVeiculosService: BuscarVeiculosService;
  buscarVeiculos; origem; delegacia; ano; numero; fabricacao; modelo; cidade; uf; situacao: any;
  
  constructor() {
    this.BuscarVeiculosService = new BuscarVeiculosService();
   }

  ngOnInit() {
    //Buscar Veiculos
    this.buscarVeiculos = this.BuscarVeiculosService.getBuscarVeiculos();
    this.origem = this.BuscarVeiculosService.getOrigem();
    this.delegacia = this.BuscarVeiculosService.getDelegacia();
    this.ano = this.BuscarVeiculosService.getAno();
    this.numero = this.BuscarVeiculosService.getNumero();
    this.fabricacao = this.BuscarVeiculosService.getFabricacao();
    this.modelo = this.BuscarVeiculosService.getModelo();
    this.cidade = this.BuscarVeiculosService.getCidade();
    this.uf = this.BuscarVeiculosService.getUF();
    this.situacao = this.BuscarVeiculosService.getSituacao();
  }
}
