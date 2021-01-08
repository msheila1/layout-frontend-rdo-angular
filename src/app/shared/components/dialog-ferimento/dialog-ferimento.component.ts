import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-ferimento',
  templateUrl: './dialog-ferimento.component.html',
  styleUrls: ['./dialog-ferimento.component.css']
})
export class DialogFerimentoComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();
  

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
