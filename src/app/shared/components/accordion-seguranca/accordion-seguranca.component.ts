import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordion-seguranca',
  templateUrl: './accordion-seguranca.component.html',
  styleUrls: ['./accordion-seguranca.component.css']
})
export class AccordionSegurancaComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  displayDialogSeguranca = false;

  constructor() { }

  ngOnInit() {

  }

  onClose() {
    this.displayChange.emit(false);
  }

}
