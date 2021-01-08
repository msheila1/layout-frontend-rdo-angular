import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit} from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AbstractComponent } from 'src/app/shared/components/utils/abstract-component';
import { PerfilService } from 'src/app/core/services/perfil.service';
import { Delegacia } from 'src/app/models/delegacia.model';


@Component({
  selector: 'app-editar-delegacia-panel',
  templateUrl: './editar-delegacia-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class EditarDelegaciaPanelComponent extends AbstractComponent implements OnInit {
  
  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  constructor(private _fb: FormBuilder, 
    protected messageService: MessageService, private perfilService: PerfilService) {
    super();
}
 
  ngOnInit() {
    this.formGroup = this._fb.group({
      id: [null],
      nomefantasia: [null, [Validators.required]],
      nomeDelegado: [null, [Validators.required]],
      telefonePlantao: [null, [Validators.required]],
      telefoneTitular: [null, [Validators.required]]
    });

    this.perfilService.findDelegaciaById(1).subscribe((result:Delegacia) => {
        this.id.setValue(result.id) ;
        this.nomefantasia.setValue(result.nomeFantasia);
        this.nomeDelegado.setValue(result.nomeDelegado);
        this.telefonePlantao.setValue(result.telefonePlantao);
        this.telefoneTitular.setValue(result.telefoneTitular);
    }, error => {
      console.log(error);
    })
  }

  //Update
  update(): void {
    let delegacia = new Delegacia();
    
    delegacia.id = this.id.value;
    delegacia.nomeFantasia = this.nomefantasia.value;
    delegacia.nomeDelegado = this.nomeDelegado.value;
    delegacia.telefonePlantao = this.telefonePlantao.value;
    delegacia.telefoneTitular = this.telefoneTitular.value;

    this.perfilService.update(delegacia).subscribe(() => {
      if(this.formGroup.valid){
        this.messageService.add({ severity: "success", summary: "Registro salvo com sucesso", detail: "Registro salvo com sucesso!"
      });  
      }else{
      this.messageService.add({ severity: "error", summary: "Erro ao validar", detail: "Preencha todos os campos obrigatórios antes de prosseguir"
      });
      }
    });
  }

  //GET
  get id() {
    return this.formGroup.get("id");
  }

  get nomefantasia() {
    return this.formGroup.get("nomefantasia");
  }

  get nomeDelegado() {
    return this.formGroup.get("nomeDelegado");
  }

  get telefonePlantao() {
    return this.formGroup.get("telefonePlantao");
  }

  get telefoneTitular() {
    return this.formGroup.get("telefoneTitular");
  }

  get telefoneOutro() {
    return this.formGroup.get("telefoneOutro");
  }

  get telefones() {
    return this.formGroup.get("telefones");
  }

  //Limpa campos preenchidos
  clearForm() {
    this.formGroup.reset();
  }
  onClose(){
    this.displayChange.emit(false);
  }
}
