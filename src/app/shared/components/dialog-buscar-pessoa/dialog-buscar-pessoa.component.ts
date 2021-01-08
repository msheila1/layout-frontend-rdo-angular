import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-buscar-pessoa',
  templateUrl: './dialog-buscar-pessoa.component.html',
  styleUrls: ['./dialog-buscar-pessoa.component.css']
})
export class DialogBuscarPessoaComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
