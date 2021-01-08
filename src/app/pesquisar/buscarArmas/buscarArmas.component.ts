import { BuscarArmasService } from './buscarArmas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscarArmas',
  templateUrl: './buscarArmas.component.html',
  styleUrls: ['./buscarArmas.component.css']
})

export class BuscarArmasComponent implements OnInit {

  BuscarArmasService: BuscarArmasService;
  buscarArmas; origem; delegaciaBo; anoBo; numeroBo; marcaBo; tipo; calibre; proprietario; situacao: any;
  
  constructor() {
    this.BuscarArmasService = new BuscarArmasService();
   }

  ngOnInit() {
    //Buscar Armas
    this.buscarArmas = this.BuscarArmasService.getBuscarArmas();
    this.origem = this.BuscarArmasService.getOrigem();
    this.delegaciaBo = this.BuscarArmasService.getDelegaciaBo();
    this.anoBo = this.BuscarArmasService.getAnoBo();
    this.numeroBo = this.BuscarArmasService.getNumeroBo();
    this.marcaBo = this.BuscarArmasService.getMarcaBo();
    this.tipo = this.BuscarArmasService.getTipo();
    this.calibre = this.BuscarArmasService.getCalibre();
    this.proprietario = this.BuscarArmasService.getProprietario();
    this.situacao = this.BuscarArmasService.getSituacao();
  }
}
