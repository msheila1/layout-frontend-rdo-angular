import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-buscar-veiculo',
  templateUrl: './dialog-buscar-veiculo.component.html',
  styleUrls: ['./dialog-buscar-veiculo.component.css']
})
export class DialogBuscarVeiculoComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  select: any;
  selected: string;
  SelecionaNao: string = '2';
  SelecionaIgnorado: string = '3';

  displayDialogBuscarVeiculo = false;

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}