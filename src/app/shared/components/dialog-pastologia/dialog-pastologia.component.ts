import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-pastologia',
  templateUrl: './dialog-pastologia.component.html',
  styleUrls: ['./dialog-pastologia.component.css']
})
export class DialogPastologiaComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
