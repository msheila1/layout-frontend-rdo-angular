import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-cartao-credito',
  templateUrl: './dialog-cartao-credito.component.html',
  styleUrls: ['./dialog-cartao-credito.component.css']
})
export class DialogCartaoCreditoComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
