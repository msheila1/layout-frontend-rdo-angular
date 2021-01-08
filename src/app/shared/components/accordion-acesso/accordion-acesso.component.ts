import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordion-acesso',
  templateUrl: './accordion-acesso.component.html',
  styleUrls: ['./accordion-acesso.component.css']
})
export class AccordionAcessoComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  displayDialogAcesso = false;

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
