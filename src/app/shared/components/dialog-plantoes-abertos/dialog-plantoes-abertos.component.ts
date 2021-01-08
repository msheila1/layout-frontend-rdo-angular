import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-plantoes-abertos',
  templateUrl: './dialog-plantoes-abertos.component.html',
  styleUrls: ['./dialog-plantoes-abertos.component.css']
})
export class DialogPlantoesAbertosComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }

}
