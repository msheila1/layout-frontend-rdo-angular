import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-acionamento',
  templateUrl: './dialog-acionamento.component.html',
  styleUrls: ['./dialog-acionamento.component.css']
})
export class DialogAcionamentoComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  constructor() { }

  ngOnInit() { }
  
  onClose(){
    this.displayChange.emit(false);
  }


}