import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-buscar-armas.',
  templateUrl: './dialog-buscar-armas.component.html',
  styleUrls: ['./dialog-buscar-armas.component.css']
})
export class DialogBuscarArmasComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();
  

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
