import { Component } from "@angular/core";
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [MessageService]
  
})
export class MessageComponent{

  constructor(private messageService: MessageService){

  }

  showConfirm() {
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Você tem certeza?', detail:'Deseja confirmar para prosseguir'});
  }
  onConfirm() {
      this.messageService.clear('c');
  }

  onReject() {
      this.messageService.clear('c');
  }

  clear() {
      this.messageService.clear();
  }
}