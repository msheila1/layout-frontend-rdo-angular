import { AbstractComponent } from 'src/app/shared/components/utils/abstract-component';
import { Component, OnInit, ViewChild, EventEmitter, Output, ChangeDetectionStrategy, Input } from "@angular/core";
import { DominioService } from 'src/app/services/dominio.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CargaFormComponent } from '../shared/carga-form/carga-form.component';
import { MessageService } from 'primeng/api';
import { CargaService } from 'src/app/core/services/carga.service';
import { Carga } from 'src/app/models/carga.model';
import { Observable } from 'rxjs';
import { ModoCarga } from 'src/app/models/modo-carga.model';
import { TipoCarga } from 'src/app/models/tipo-carga.model';
import { UnidadeCarga } from 'src/app/models/unidade-carga.model';
import { CargaNovoComponent } from '../carga-novo/carga-novo.component';


@Component({
  selector: 'app-carga-editar',
  templateUrl: './carga-editar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CargaEditarComponent extends AbstractComponent implements OnInit{

  //@ViewChild(CargaFormComponent) cargaFormComponent: AbstractComponent;

  listModoCarga$: Observable<ModoCarga[]>;
  listTipoCarga$: Observable<TipoCarga[]>;
  listUnidadeCarga$: Observable<UnidadeCarga[]>;

  
  tipoCargaSelecionado: TipoCarga;
  modoCargaSelecionado: ModoCarga;
  unidadeCargaSelecionado: UnidadeCarga;
  //@Input() cargaForm: any;

  
  constructor(private _fb: FormBuilder, private _dominioService: DominioService, 
    private _cargaService: CargaService,
    protected messageService: MessageService) {
    super()
  }

  ngOnInit() {

    this.formGroup = this._fb.group({
     // cargaForm:[null],
      id: [null],
      origemCarga: [null, [Validators.required]],
      nomeDelegado: [null, [Validators.required]],
      telefonePlantao: [null, [Validators.required]],
      telefoneTitular: [null, [Validators.required]],
      detalheCarga:  [null, [Validators.required]]
    });

    this._cargaService.findCargaById(1).subscribe((result:Carga) => {
      this.id.setValue(result.id) ;
      this.detalheCarga.setValue(result.detalheCarga);
      this.nomeDelegado.setValue(result.nomeDelegado);
      this.telefonePlantao.setValue(result.telefonePlantao);
      this.telefoneTitular.setValue(result.telefoneTitular);
  }, error => {
    console.log(error);
  })

    this.listTipoCarga$ = this._dominioService.listTipoCarga();
    this.listModoCarga$ = this._dominioService.listModoCarga();
    this.listUnidadeCarga$ = this._dominioService.listUnidadeCarga();
  }

  ngAfterViewInit(): void {
  //this.formGroup.setControl('cargaForm', this.cargaFormComponent.formGroup);
  }

  update(): void {
    let carga = new Carga();
    
    carga.id = this.id.value;
    carga.detalheCarga = this.detalheCarga.value;
    carga.nomeDelegado = this.nomeDelegado.value;
    carga.telefonePlantao = this.telefonePlantao.value;
    carga.telefoneTitular = this.telefoneTitular.value;

    this._cargaService.update(carga).subscribe(() => {
      if(this.formGroup.valid){
        this.messageService.add({ severity: "success", summary: "Registro salvo com sucesso", detail: "Registro salvo com sucesso!"
      });  
      }else{
      this.messageService.add({ severity: "error", summary: "Erro ao validar", detail: "Preencha todos os campos obrigatórios antes de prosseguir"
      });
      }
    });
  }

  get id() {
    return this.formGroup.get("id");
  }

  get detalheCarga() {
    return this.formGroup.get("detalheCarga");
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


  updateForm() {
    this.update();
  }
}
