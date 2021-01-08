import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-conta-bancaria',
  templateUrl: './dialog-conta-bancaria.component.html',
  styleUrls: ['./dialog-conta-bancaria.component.css']
})
export class DialogContaBancariaComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
