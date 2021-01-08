import { ModusoperandiService } from './modusoperandi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modus-operandi',
  templateUrl: './modus-operandi.component.html',
  styleUrls: ['./modus-operandi.component.css']
})
export class ModusOperandiComponent implements OnInit {

  //Modus Operandi
  displayDialogModus = false;
  ModusoperandiService: ModusoperandiService;
  selecionaModus ; modusoperandi; local; qualificacao: any;
  select: any[];
  selected: string;


  constructor() {
    this.select = [];
    this.select.push({label:'Selecione', value:'1'});
    
    //Modus Operandi
    this.ModusoperandiService = new ModusoperandiService();
   }

  ngOnInit() {
    //Modus Operandi
    this.modusoperandi = this.ModusoperandiService.getModusoperandi();
    this.local = this.ModusoperandiService.getLocal();
    this.qualificacao = this.ModusoperandiService.getQualificacao();
    this.selecionaModus = [];
  }

}
