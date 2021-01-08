import { ObservacoesService } from './observacoes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observacoes',
  templateUrl: './observacoes.component.html',
  styleUrls: ['./observacoes.component.css']
})
export class ObservacoesComponent implements OnInit {

  //Observações
  displayDialogObs = false;
  selecionaObs : any;
  observacoes: any;
  displayObs: boolean = false;
  ObservacoesService: ObservacoesService;
  observacao: string[] = [];
  select: any[];
  selected: string;

  showDialogObs() {
    this.displayObs = true;
  }
  onRowSelect(event) {
    this.displayObs = true;
  }

  constructor() {
    
    this.select = [];
    this.select.push({label:'Selecione', value:'1'});

    //Observações
    this.ObservacoesService = new ObservacoesService();
   }

  ngOnInit() {
    //Observações
    this.observacoes = this.ObservacoesService.getObservacoes();
    this.observacao = this.ObservacoesService.getObservacao();
    this.selecionaObs = [];
  }

}
