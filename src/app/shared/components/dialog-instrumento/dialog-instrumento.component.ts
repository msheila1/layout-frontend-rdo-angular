import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-instrumento',
  templateUrl: './dialog-instrumento.component.html',
  styleUrls: ['./dialog-instrumento.component.css']
})
export class DialogInstrumentoComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();
  

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
