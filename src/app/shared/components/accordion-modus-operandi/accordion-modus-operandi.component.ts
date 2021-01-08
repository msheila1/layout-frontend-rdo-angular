import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordion-modus-operandi',
  templateUrl: './accordion-modus-operandi.component.html',
  styleUrls: ['./accordion-modus-operandi.component.css']
})
export class AccordionModusOperandiComponent implements OnInit {

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
