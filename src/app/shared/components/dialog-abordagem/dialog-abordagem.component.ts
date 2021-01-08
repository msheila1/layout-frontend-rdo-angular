import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-abordagem',
  templateUrl: './dialog-abordagem.component.html',
  styleUrls: ['./dialog-abordagem.component.css']
})
export class DialogAbordagemComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
