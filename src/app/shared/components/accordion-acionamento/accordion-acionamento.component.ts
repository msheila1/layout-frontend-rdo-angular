import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordion-acionamento',
  templateUrl: './accordion-acionamento.component.html',
  styleUrls: ['./accordion-acionamento.component.css']
})
export class AccordionAcionamentoComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  displayDialogAcionamento = false;

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
