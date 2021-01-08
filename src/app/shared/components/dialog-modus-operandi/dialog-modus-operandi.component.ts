import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-modus-operandi',
  templateUrl: './dialog-modus-operandi.component.html',
  styleUrls: ['./dialog-modus-operandi.component.css']
})
export class DialogModusOperandiComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
