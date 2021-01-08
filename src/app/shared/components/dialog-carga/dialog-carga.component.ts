import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-carga',
  templateUrl: './dialog-carga.component.html',
  styleUrls: ['./dialog-carga.component.css']
})
export class DialogCargaComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  select: any;
  selected: string;
  SelecionaSim: string = '1';
  SelecionaNao: string = '2';


  constructor() { }

  ngOnInit() {

  }

  onClose() {
    this.displayChange.emit(false);
  }

}
