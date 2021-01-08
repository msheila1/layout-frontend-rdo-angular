import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AbstractComponent } from 'src/app/shared/components/utils/abstract-component';
import { MessageService } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';
import { Plantao} from '../models/plantao.model';
import { Plantonista } from '../models/plantonista.model';
import { PlantaoService } from '../core/services/plantao.service';
import { Usuario } from '../models/usuario.model';
import { Delegacia } from '../models/delegacia.model';

@Component({
  selector: 'app-plantao',
  templateUrl: './plantao.component.html'
})
export class PlantaoComponent extends AbstractComponent implements OnInit, OnDestroy {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  usuario: Usuario;
  plantao: Plantao;
  plantaoAtual: Observable<Plantao>;

  plantaoAnterior: Observable<Plantao>;
  usuariosPlantaoAnterior: Observable<Plantonista[]>;

  movimentacaoPlantaoAtual: Observable<Plantao>;
  plantonistasPlantaoAtual: Observable<Plantonista[]>;


  usersPlantonistas: Plantonista[];
  usersPlantonistasTarget: Plantonista[];

  usersPlantonistasSubs: Subscription;
  usersPlantonistasTargetSubs: Subscription;

  delegaciaPlantao: Observable<Delegacia[]>;


  constructor(
    private _fb: FormBuilder, 
    protected messageService: MessageService, 
    private plantaoService: PlantaoService) { 
    super();
    }

  ngOnInit() {
    this.createFormGroup();
    this.usuario = new Usuario(); // keyCloak;
    this.usuario.nome = 'Joao da Silva';

    this.plantaoAtual = this.plantaoService.findPlantaoAtual();
    this.plantaoAtual.subscribe(p => this.plantao = p);

    this.plantaoAnterior = this.plantaoService.findPlantaoAnterior();
    this.usuariosPlantaoAnterior = this.plantaoService.listByUsuarioPlantaoAnterior();

    this.movimentacaoPlantaoAtual = this.plantaoService.listMovimentacaoAtual();
    this.plantonistasPlantaoAtual = this.plantaoService.listByPlantonistas();

    this.loadListPlantonistasDisponiveis();
    this.loadListPlantonistasCadastrados();
    this.delegaciaPlantao = this.plantaoService.listDelegacia();

    if (this.plantao) {
      this.formGroup.patchValue(this.plantao);
    }
  }

  ngOnDestroy(): void {
    this.usersPlantonistasSubs.unsubscribe();
    this.usersPlantonistasTargetSubs.unsubscribe();
  }

  private loadListPlantonistasDisponiveis() {
    this.usersPlantonistas = [];
    this.usersPlantonistasSubs = this.plantaoService.listPlantonistas().subscribe(plantonistas  => {
      plantonistas.forEach(plantonista => {
        this.usersPlantonistas.push(plantonista);
      });
    });
  }

  private loadListPlantonistasCadastrados() {
    this.usersPlantonistasTarget = [];
    this.usersPlantonistasSubs = this.plantaoService.listPlantonistasAtivos().subscribe(plantonistas  => {
      plantonistas.forEach(plantonista => {
        this.usersPlantonistasTarget.push(plantonista);
      });
    });
  }

    //Update
    update(): void {
    this.loadModelFromForm();
    // this.plantao.intercorrencia.saveIntercorrencia().subscribe();      
    this.plantaoService.saveIntercorrencia().subscribe();     
    console.log(this.plantao) ;
  
    if(this.formGroup.valid){
      this.messageService.add({ severity: "success", summary: "Registro salvo com sucesso", detail: "Registro salvo com sucesso!"
    });  
    }else{
      this.messageService.add({ severity: "error", summary: "Erro ao validar", detail: "Preencha todos os campos obrigatórios antes de prosseguir"
    });
    }
    
  }

createFormGroup() {
  this.formGroup = this._fb.group({
    "intercorrencia": new FormControl('', []), 
  });
}

  //GET
  loadModelFromForm() : void {
    this.plantao.intercorrencia = this.formGroup.get('intercorrencia').value;
  }

  //Limpa campos preenchidos
  clearForm() {
    this.formGroup.reset();
  }
  onClose(){
    this.displayChange.emit(false);
  }

}
