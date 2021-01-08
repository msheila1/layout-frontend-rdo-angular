import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-local-pessoa',
  templateUrl: './dialog-local-pessoa.component.html',
  styleUrls: ['./dialog-local-pessoa.component.css']
})
export class DialogLocalPessoaComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
