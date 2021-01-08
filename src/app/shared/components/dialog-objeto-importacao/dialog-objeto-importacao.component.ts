import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-objeto-importacao',
  templateUrl: './dialog-objeto-importacao.component.html',
  styleUrls: ['./dialog-objeto-importacao.component.css']
})
export class DialogObjetoImportacaoComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
