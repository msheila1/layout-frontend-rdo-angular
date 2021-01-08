import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-instrumento-veiculo',
  templateUrl: './dialog-instrumento-veiculo.component.html',
  styleUrls: ['./dialog-instrumento-veiculo.component.css']
})
export class DialogInstrumentoVeiculoComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();
  

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
