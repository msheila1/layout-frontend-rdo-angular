import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Plantonista } from '../../../models/plantonista.model';

@Component({
  selector: 'app-dialog-plantonista',
  templateUrl: './dialog-plantonista.component.html',
  styleUrls: ['./dialog-plantonista.component.css']
})
export class DialogPlantonistaComponent implements OnInit {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  listPlantonista: Plantonista[];
  selectedPlantonista: Plantonista;

  constructor() { }

  ngOnInit() {
    this.loadListPlantonista();
    this.selectedPlantonista = null;
  }

  // Work against memory leak if component is destroyed
  /*
  ngOnDestroy() {
    this.displayChange.unsubscribe();
  }
  */

  // metodo para fechar modal
  onClose() {
    this.displayChange.emit(null);
  }

  // metoro para recuperar lista de plantonistas da base
  loadListPlantonista() {
    this.listPlantonista = [ //TODO:DNS recuperar da base, montar micro serviços
      { id: 1, usuario: { id: 1, rg: "12.345.678-9", nome: 'Zeca', password: '', confirmPassword: '', passwordUser: '' }, dataHoraEntrada: new Date(), dataHoraSaida: new Date(), plantao: null },
      { id: 2, usuario: { id: 1, rg: "13.163.432-9", nome: 'João', password: '', confirmPassword: '', passwordUser: '' }, dataHoraEntrada: new Date(), dataHoraSaida: new Date(), plantao: null },
      { id: 3, usuario: { id: 1, rg: "51.345.851-9", nome: 'Maria', password: '', confirmPassword: '', passwordUser: '' }, dataHoraEntrada: new Date(), dataHoraSaida: new Date(), plantao: null }
    ]
  }

  //metodo disparado no onClick do botão "Confirmar" //TODO:DNS implementar a função de confirmar
  onClickConfirma() {
    this.displayChange.emit(this.selectedPlantonista);
  }

}