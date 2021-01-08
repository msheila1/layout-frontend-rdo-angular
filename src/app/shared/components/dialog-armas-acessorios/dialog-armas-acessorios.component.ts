import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-armas-acessorios.',
  templateUrl: './dialog-armas-acessorios.component.html',
  styleUrls: ['./dialog-armas-acessorios.component.css']
})
export class DialogArmasAcessoriosComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();
  
  displayDialogBuscarArmas = false;

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
