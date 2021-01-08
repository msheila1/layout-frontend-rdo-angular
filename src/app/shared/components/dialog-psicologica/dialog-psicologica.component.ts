import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-psicologica',
  templateUrl: './dialog-psicologica.component.html',
  styleUrls: ['./dialog-psicologica.component.css']
})
export class DialogPsicologicaComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
