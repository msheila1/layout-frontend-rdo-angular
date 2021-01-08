import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-pessoa-juridica',
  templateUrl: './dialog-pessoa-juridica.component.html',
  styleUrls: ['./dialog-pessoa-juridica.component.css']
})
export class DialogPessoaJuridicaComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();
  

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
