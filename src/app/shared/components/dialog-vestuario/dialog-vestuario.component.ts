import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-vestuario',
  templateUrl: './dialog-vestuario.component.html',
  styleUrls: ['./dialog-vestuario.component.css']
})
export class DialogVestuarioComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
