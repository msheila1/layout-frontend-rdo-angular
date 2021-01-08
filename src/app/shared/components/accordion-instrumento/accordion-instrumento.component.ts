import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordion-instrumento',
  templateUrl: './accordion-instrumento.component.html',
  styleUrls: ['./accordion-instrumento.component.css']
})
export class AccordionInstrumentoComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  displayDialogInstrumentoVeiculo = false;

  select: any;
  selected: string;
  SelecionaNao: string = '2';
  SelecionaIgnorado: string = '3';

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
