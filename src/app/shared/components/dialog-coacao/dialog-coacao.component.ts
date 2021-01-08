import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-coacao',
  templateUrl: './dialog-coacao.component.html',
  styleUrls: ['./dialog-coacao.component.css']
})
export class DialogCoacaoComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
