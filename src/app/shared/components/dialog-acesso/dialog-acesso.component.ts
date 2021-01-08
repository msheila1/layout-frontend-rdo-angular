import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-acesso',
  templateUrl: './dialog-acesso.component.html',
  styleUrls: ['./dialog-acesso.component.css']
})
export class DialogAcessoComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  constructor() { }

  ngOnInit() { }
  
  onClose(){
    this.displayChange.emit(false);
  }


}