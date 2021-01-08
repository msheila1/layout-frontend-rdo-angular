import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-escolha-delegacia',
  templateUrl: './dialog-escolha-delegacia.component.html',
  styleUrls: ['./dialog-escolha-delegacia.component.css']
})
export class DialogEscolhaDelegaciaComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }

}
