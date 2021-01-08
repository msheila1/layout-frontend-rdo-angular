import { ObjetoService } from './objeto.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-objeto',
  templateUrl: './dialog-objeto.component.html',
  styleUrls: ['./dialog-objeto.component.css']
})
export class DialogObjetoComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  //Objeto
  ObjetoService: ObjetoService;
  select: any;
  selected: string;
  pessoas; rg; tipoPessoa; endereco; telefone: any;

  constructor() { 
    this.ObjetoService = new ObjetoService();
  }

  ngOnInit() {
    //Pessoa
    this.pessoas = this.ObjetoService.getPessoas();
    this.rg = this.ObjetoService.getRg();
    this.tipoPessoa = this.ObjetoService.getTipoPessoa(); 
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
