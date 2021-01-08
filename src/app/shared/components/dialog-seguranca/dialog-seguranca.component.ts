import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-seguranca',
  templateUrl: './dialog-seguranca.component.html',
  styleUrls: ['./dialog-seguranca.component.css']
})
export class DialogSegurancaComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  constructor() { }

  ngOnInit() { }
  
  onClose(){
    this.displayChange.emit(false);
  }


}