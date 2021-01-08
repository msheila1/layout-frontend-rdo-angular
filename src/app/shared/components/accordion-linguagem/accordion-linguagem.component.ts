import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-accordion-linguagem',
  templateUrl: './accordion-linguagem.component.html',
  styleUrls: ['./accordion-linguagem.component.css']
})
export class AccordionLinguagemComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  SelectButton1: string = '1';
  SelectButton2: string = '2';
  SelectButton3: string = '3';


  constructor() {

  }


  ngOnInit() {


  }

  onClose() {
    this.displayChange.emit(false);
  }

}
