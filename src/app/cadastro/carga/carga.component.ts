import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractComponent } from "src/app/shared/components/utils/abstract-component";
import { MessageService, ConfirmationService } from "primeng/api";
import { CargaService } from 'src/app/core/services/carga.service';
import { Observable } from 'rxjs';
import { Carga } from 'src/app/models/carga.model';
import { CargaNovoComponent } from './carga-novo/carga-novo.component';
import { DominioService } from 'src/app/services/dominio.service';
import { ModoCarga } from 'src/app/models/modo-carga.model';
import { TipoCarga } from 'src/app/models/tipo-carga.model';
import { UnidadeCarga } from 'src/app/models/unidade-carga.model';
import { CargaFormComponent } from './shared/carga-form/carga-form.component';
 

@Component({
  selector: "app-carga",
  templateUrl: "./carga.component.html",
  styleUrls: ["./carga.component.css"],
  providers: [ConfirmationService]
})
export class CargaComponent extends AbstractComponent implements OnInit{

  
  @ViewChild(CargaNovoComponent) cargaNovoComponent: AbstractComponent;
  @ViewChild(CargaFormComponent) cargaFormComponent: AbstractComponent;
  

  showCarga = false;

  listModoCarga$: Observable<ModoCarga[]>;
  listTipoCarga$: Observable<TipoCarga[]>;
  listUnidadeCarga$: Observable<UnidadeCarga[]>;

  constructor(
    private _fb: FormBuilder,
    protected messageService: MessageService,
    private _cargaService: CargaService,
    private _serviceDominio: DominioService) 
    {
    super();
    }

  ngOnInit() {
    this.formGroup = this._fb.group({
      carga: [null],
      cargaForm: [null]
    });

    this.listTipoCarga$ = this._serviceDominio.listTipoCarga();
    this.listModoCarga$ = this._serviceDominio.listModoCarga();
    this.listUnidadeCarga$ = this._serviceDominio.listUnidadeCarga();
  }
  
 ngAfterViewInit(): void {
   this.formGroup.setControl('carga', this.cargaNovoComponent.formGroup);
   this.formGroup.setControl('cargaForm', this.cargaFormComponent.formGroup);
  }
  
  onSubmit(){
  this.validateControls();

   console.log(this.formGroup);
    const carga = new Carga();
    //carga.cargaFrom = this.carga.value;
    
    this._cargaService.create(this.carga.value).subscribe(() => {
      if (this.formGroup.valid) {
        this.messageService.add({ severity: "success", summary: "Registro salvo com sucesso", detail: "" });
      } else {
        this.messageService.add({ severity: "error", summary: "Erro ao validar", detail: "Preencha todos os campos obrigatórios antes de prosseguir." });
      }
    });
  }
  
  get carga () {
    return this.formGroup.get('carga');
  }
  get cargaForm () {
    return this.formGroup.get('cargaForm');
  }
}
