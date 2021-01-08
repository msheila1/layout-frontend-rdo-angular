import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AutoCompleteGoogle } from 'src/app/models/autoCompleteGoogle.model';
import { FormBuilder, Validators } from '@angular/forms';
import { AbstractComponent } from '../utils/abstract-component';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dialog-delegacia',
  templateUrl: './dialog-delegacia.component.html',
  styleUrls: ['./dialog-delegacia.component.css'],
  providers: [MessageService]
})

export class DialogDelegaciaComponent extends AbstractComponent implements OnInit {

  logradouroAutoComplete = new AutoCompleteGoogle(); //TODO:DNS nessário settar no formBuilder = "logradouro"

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  displayDialogDelegacia = false;

  constructor(private _fb: FormBuilder, private router: Router, 
    protected messageService: MessageService) {
    super();
   }

  ngOnInit() {
    //Delegacia
    this.formGroup = this._fb.group({
      nomeFantasia: [null, [Validators.required]],
      nomeDelegado: [null, [Validators.required]],
      telefonePlantao: [null, [Validators.required]],
      telefoneTitular: [null, [Validators.required]],
      telefoneOutros: [null, [Validators.required]],
      telefone: [null, [Validators.required]]
    });
    
  }

  onClose(){
    this.displayChange.emit(false);
  }

  showSuccess() {
  console.log('showSucess');

    this.validateControls();

    console.log(this.formGroup);

    if (this.formGroup.valid) {
      this.messageService.add({ severity: 'success', summary: 'Registro salvo com sucesso', detail: 'RDO gerado' });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Erro ao validar', detail: 'Preencha todos os campos obrigatórios (*) antes de prosseguir.' });
    }
  }

}
