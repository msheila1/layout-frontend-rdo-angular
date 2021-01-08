import { EntorpecentesService } from './entorpecentes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entorpecentes',
  templateUrl: './entorpecentes.component.html',
  styleUrls: ['./entorpecentes.component.css']
})
export class EntorpecentesComponent implements OnInit {

  //Entorpecentes  
  displayDialogEntorpecentes = false;
  EntorpecentesService: EntorpecentesService;
  selecionaEntorpecente; entorpecentes; tipoEntorpecente: any;
  select: any[];
  selected: string;
  items: any;

  constructor() {
    this.select = [];
    this.select.push({label:'Selecione', value:'1'});
    //Entorpecentes
    this.EntorpecentesService = new EntorpecentesService();        
   }

  ngOnInit() {
    //Entorpecentes
    this.entorpecentes = this.EntorpecentesService.getEntorpecentes();
    this.tipoEntorpecente = this.EntorpecentesService.getTipoEntorpecente();

    //Botão Excluir
    this.items = [
    {label: 'Excluir', icon: 'fa fa-close', routerLink: ['#']}
    ];
  }

}
