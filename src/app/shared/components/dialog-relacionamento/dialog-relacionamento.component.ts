import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-relacionamento',
  templateUrl: './dialog-relacionamento.component.html',
  styleUrls: ['./dialog-relacionamento.component.css']
})
export class DialogRelacionamentoComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}