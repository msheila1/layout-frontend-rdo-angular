import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-telefone-autor',
  templateUrl: './dialog-telefone-autor.component.html',
  styleUrls: ['./dialog-telefone-autor.component.css']
})
export class DialogTelefoneAutorComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
