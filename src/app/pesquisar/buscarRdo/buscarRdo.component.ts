import { BuscarRdoService } from './buscarRdoservice';
import { ConsultarHistoricoService } from './consultarHistorico.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-buscarRdo',
  templateUrl: './buscarRdo.component.html',
  styleUrls: ['./buscarRdo.component.css']
})

export class BuscarRdoComponent implements OnInit {

  BuscarRdoService: BuscarRdoService;
  ConsultarHistoricoService: ConsultarHistoricoService;
  buscarRdo; situacao; rdo; delegacia; ano; circunscricao; comunicacao: any;
  consultaRdo; usuario; data; versao: any;
  items: any;
  SelectRdo: string = '1';
  Select: string = '1';
  selecionaBuscaRdo: any;
  listBuscarRdo: any;
  ConsultaHistoricoRdo: any;
  listConsultaHistorico: any;
  displayConsultaHistorico: boolean;

  showDialogConsultaHistorico() {    
    this.displayConsultaHistorico = true;
  }

  constructor() {
    this.BuscarRdoService = new BuscarRdoService();
    this.ConsultarHistoricoService = new ConsultarHistoricoService();
   }

  ngOnInit() {
    //Buscar RDO
    this.buscarRdo = this.BuscarRdoService.getBuscarRdo();
    this.situacao = this.BuscarRdoService.getSituacao();
    this.delegacia = this.BuscarRdoService.getDelegacia();
    this.ano = this.BuscarRdoService.getAno();
    this.rdo = this.BuscarRdoService.getRdo();
    this.circunscricao = this.BuscarRdoService.getCircunscricao();
    this.comunicacao = this.BuscarRdoService.getComunicacao();

    //Consultar Histórico Versionamento RDO
    this.consultaRdo = this.ConsultarHistoricoService.getConsultarRdo();
    this.usuario = this.ConsultarHistoricoService.getUsuario();
    this.data = this.ConsultarHistoricoService.getData();
    this.versao = this.ConsultarHistoricoService.getVersao()

    this.items = [
      {label: 'Visualizar RDO', icon: 'pi pi-search', routerLink: ['']}
  ];
}
}
