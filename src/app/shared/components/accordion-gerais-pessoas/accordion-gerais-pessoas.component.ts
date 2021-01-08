import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordion-gerais-pessoas',
  templateUrl: './accordion-gerais-pessoas.component.html',
  styleUrls: ['./accordion-gerais-pessoas.component.css']
})
export class AccordionGeraisPessoasComponent implements OnInit {

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
