import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-observacoes',
  templateUrl: './dialog-observacoes.component.html',
  styleUrls: ['./dialog-observacoes.component.css']
})
export class DialogObservacoesComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();
  

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
