import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-buscar-marca',
  templateUrl: './dialog-buscar-marca.component.html',
  styleUrls: ['./dialog-buscar-marca.component.css']
})
export class DialogBuscarMarcaComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
