import { CircunstanciaService } from './circuntancia.service';
import { DesdobramentoService } from './desdobramento.service';
import { IncidenciaService } from './incidencia.service';
import { NaturezaService } from './natureza.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-natureza',
  templateUrl: './natureza.component.html',
  styleUrls: ['./natureza.component.css']
})
export class NaturezaComponent implements OnInit {

  //Natureza
  displayNatureza: boolean = false;
  NaturezaService: NaturezaService;
  ocorrencia; especie; natureza; selecionaNatureza: any;
  naturezas:any;
  select: any;
  selected: string;
  items: any;
  items2: any;

  //Incidência
  displayIncidencia: boolean = false;
  IncidenciaService: IncidenciaService;
  selecionaIncidencia: any;
  incidencia2: any;
  incidencia;  pessoa; tipoVinc; especieInc; conduta; desdobramentoInc; modalidade; circunstanciaInc; crime: any;

  //Desdobramento  
  displayDesdobramento: boolean = false;
  DesdobramentoService: DesdobramentoService;
  selecionaDesdobramento; desdobramento2; desdobramento; modalidades: any;

  //Circunstância
  displayCircunstancia: boolean = false;
  CircunstanciaService: CircunstanciaService;
  selecionaCircunstancia: any;
  circunstancia2: any;
  circunstancia: string[] = [];


  showDialogNatureza() {
    this.displayNatureza = true;
  }

  showDialogIncidencia() {
    this.displayIncidencia = true;
  }

  showDialogDesdobramento() {
    this.displayDesdobramento = true;
  }

  showDialogCircunstancia() {
    this.displayCircunstancia = true;
  }


  constructor() {
    this.select = [];
    this.select.push({label:'Selecione', value:'1'});

    //Natureza
    this.NaturezaService = new NaturezaService();
    //Incidência
    this.IncidenciaService = new IncidenciaService();
    //Desdobramento
    this.DesdobramentoService = new DesdobramentoService();
    //Circunstancia
    this.CircunstanciaService = new CircunstanciaService();
   }

  ngOnInit() {
    //Natureza
    this.naturezas = this.NaturezaService.getNatureza();
    this.ocorrencia = this.NaturezaService.getOcorrencia();
    this.especie = this.NaturezaService.getEspecie();
    this.natureza = this.NaturezaService.getNatureza();

    //Incidência
    this.incidencia = this.IncidenciaService.getIncidencia();
    this.pessoa = this.IncidenciaService.getPessoa();
    this.tipoVinc = this.IncidenciaService.getTipoVinc();
    this.natureza = this.IncidenciaService.getNatureza();
    this.especie = this.IncidenciaService.getEspecie();
    this.conduta = this.IncidenciaService.getConduta();
    this.desdobramentoInc = this.IncidenciaService.getDesdobramento();
    this.modalidade = this.IncidenciaService.getModalidade();
    this.circunstanciaInc = this.IncidenciaService.getCircunstancia();
    this.crime = this.IncidenciaService.getCrime();

    //Desdobramento
    this.desdobramento = this.DesdobramentoService.getDesdobramento();
    this.modalidades = this.DesdobramentoService.getModalidades();

    //Circunstância
    this.circunstancia = this.CircunstanciaService.getCircunstancia();

    //Botões Ações 
    this.items = [
      {label: 'Editar', icon: 'fa fa-edit', command: () => {
        this.editar();
    }},
      {label: 'Excluir', icon: 'fa fa-close',routerLink: ['/setup']}
    ];

    //Botão Excluir
    this.items2 = [
      {label: 'Excluir', icon: 'fa fa-close',routerLink: ['/setup']}
    ];
  }

  editar() {
    this.displayNatureza = true;};
  
  excluir() {
    this.displayNatureza = true;};    
}

