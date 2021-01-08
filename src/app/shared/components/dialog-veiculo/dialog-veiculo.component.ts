import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-veiculo',
  templateUrl: './dialog-veiculo.component.html',
  styleUrls: ['./dialog-veiculo.component.css']
})
export class DialogVeiculoComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  select: any;
  selected: string;
  SelecionaNao: string = '2';
  SelecionaIgnorado: string = '3';

  displayDialogBuscarVeiculo = false;
  displayDialogBuscarMarca= false;

  constructor() { }

  ngOnInit() {
    
  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
