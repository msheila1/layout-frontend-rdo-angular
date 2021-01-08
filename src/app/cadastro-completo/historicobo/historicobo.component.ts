import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-historicobo',
  templateUrl: './historicobo.component.html',
  styleUrls: ['./historicobo.component.css'],
  providers: [MessageService]
})
export class HistoricoboComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  //Success Message
  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Registro salvo com sucesso', detail:''});
  }

  ngOnInit() {}

}
