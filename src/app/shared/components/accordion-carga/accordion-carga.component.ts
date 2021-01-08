import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordion-carga',
  templateUrl: './accordion-carga.component.html',
  styleUrls: ['./accordion-carga.component.css']
})
export class AccordionCargaComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

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
