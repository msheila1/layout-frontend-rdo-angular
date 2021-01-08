import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-ruido',
  templateUrl: './dialog-ruido.component.html',
  styleUrls: ['./dialog-ruido.component.css']
})
export class DialogRuidoComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  constructor() { }

  ngOnInit() { }
  
  onClose(){
    this.displayChange.emit(false);
  }


}