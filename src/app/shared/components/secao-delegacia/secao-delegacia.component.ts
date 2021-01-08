import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AbstractComponent } from '../utils/abstract-component';
import { MessageService } from 'primeng/api';
import { MustMatch } from '../utils/must-match.validator';
import { DelegaciaService } from 'src/app/services/delegacia.service';


@Component({
  selector: 'app-secao-delegacia',
  templateUrl: './secao-delegacia.component.html',
  styleUrls: ['./secao-delegacia.component.css'],
  providers: [MessageService]
})
export class SecaoDelegaciaComponent extends AbstractComponent implements OnInit  {

  @Output() displayChange = new EventEmitter();

  //Delegacia
  DelegaciaService: DelegaciaService;
  delegaciaAtual; seccional; codDp; nomeDp; tipoDp; delegaciaTit; delegadoPlantao; inqueritos; bloqueioRg; bloqueioVeiculo; bloqueioDesap; enviaDefensoria; enviaInfocrim; edicaoDoc: any;

  displayDialogDelegacia = false;

  submitted = false;

  constructor(private _fb: FormBuilder, protected messageService: MessageService) {
    super();

  //Delegacia
  this.DelegaciaService = new DelegaciaService();

  }

  ngOnInit() { 
    this.formGroup = this._fb.group({
      senhaAtual:[null,  [Validators.required]],
      password:  [null,  Validators.compose([Validators.required, 
        Validators.maxLength(6)])],
      confirmPassword: [null,  [Validators.required, Validators.maxLength(6)]],
    },{
      validator: MustMatch('password', 'confirmPassword'),
  });

  //Delegacia
  this.delegaciaAtual = this.DelegaciaService.getDelegacia();
  this.seccional = this.DelegaciaService.getSeccional();
  this.codDp = this.DelegaciaService.getCodigoDp();
  this.nomeDp = this.DelegaciaService.getNomeDp();
  this.tipoDp =  this.DelegaciaService.getTipoDp();
  this.delegaciaTit = this.DelegaciaService.getDelegadoTit();
  this.delegadoPlantao = this.DelegaciaService.getDelegadoPlantao();
  this.inqueritos = this.DelegaciaService.getInqueritos();
  this.bloqueioRg = this.DelegaciaService.getBloqueioRg();
  this.bloqueioVeiculo = this.DelegaciaService.getBloqueioVeiculo();
  this.bloqueioDesap = this.DelegaciaService.getBloqueioDesap();
  this.enviaDefensoria = this.DelegaciaService.getEnviaDefensoria();
  this.enviaInfocrim = this.DelegaciaService.getEnviaInfocrim(); 
  this.edicaoDoc = this.DelegaciaService.getEdicaoDoc();
  }

  get confirmPassword() {
    return this.formGroup.get("confirmPassword");
  }

  // convenience getter for easy access to form fields
    get f() { return this.formGroup.controls; }


    onSubmit() {
      console.log('showSucess');

      this.validateControls();
  
      console.log(this.formGroup);
  
      if (this.formGroup.valid) {
        this.messageService.add({ severity: 'success', summary: 'Registro salvo com sucesso', detail: 'Senha alterada com sucesso!' });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Erro ao validar', detail: 'Preencha todos os campos obrigatórios antes de prosseguir' });
      }
    
      if (this.formGroup.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formGroup.value))
}

errorMsgs = {
  'confirmPassword': {
    validator: (error) => ({severity:'error', summary: 'Senha', detail:'Senhas não coincidem'}),
  }
}

}
