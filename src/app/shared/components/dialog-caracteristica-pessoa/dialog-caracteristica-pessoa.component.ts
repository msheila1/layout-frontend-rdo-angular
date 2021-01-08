import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-caracteristica-pessoa',
  templateUrl: './dialog-caracteristica-pessoa.component.html',
  styleUrls: ['./dialog-caracteristica-pessoa.component.css']
})
export class DialogCaracteristicaPessoaComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
