import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-entorpecentes',
  templateUrl: './dialog-entorpecentes.component.html',
  styleUrls: ['./dialog-entorpecentes.component.css']
})
export class DialogEntorpecentesComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();
  

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
