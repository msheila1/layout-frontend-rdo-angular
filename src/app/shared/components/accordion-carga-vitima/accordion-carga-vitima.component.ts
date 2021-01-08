import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordion-carga-vitima',
  templateUrl: './accordion-carga-vitima.component.html',
  styleUrls: ['./accordion-carga-vitima.component.css']
})
export class AccordionCargaVitimaComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  select: any;
  selected: string;
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
