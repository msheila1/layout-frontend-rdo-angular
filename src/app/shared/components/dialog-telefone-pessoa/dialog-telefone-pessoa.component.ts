import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-telefone-pessoa',
  templateUrl: './dialog-telefone-pessoa.component.html',
  styleUrls: ['./dialog-telefone-pessoa.component.css']
})
export class DialogTelefonePessoaComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  SelectButton1: string = '1';
  SelectButton2: string = '2';
  SelectButton3: string = '3';

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
