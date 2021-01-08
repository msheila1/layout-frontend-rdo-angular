import { AbstractComponent } from 'src/app/shared/components/utils/abstract-component';
import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { DominioService } from 'src/app/services/dominio.service';
import { Observable } from 'rxjs';
import { ModoCarga } from 'src/app/models/modo-carga.model';
import { TipoCarga } from 'src/app/models/tipo-carga.model';
import { UnidadeCarga } from 'src/app/models/unidade-carga.model';
import { FormBuilder, Validators } from '@angular/forms';
import { CargaFormComponent } from '../shared/carga-form/carga-form.component';
import { MessageService } from 'primeng/api';
import { CargaService } from 'src/app/core/services/carga.service';
import { Carga } from 'src/app/models/carga.model';


@Component({
  selector: 'app-carga-novo',
  templateUrl: './carga-novo.component.html',
})
export class CargaNovoComponent extends AbstractComponent implements OnInit{


  @ViewChild(CargaFormComponent) cargaFormComponent: AbstractComponent;
  
  // carga$: Observable<Carga[]>;

  listModoCarga$: Observable<ModoCarga[]>;
  listTipoCarga$: Observable<TipoCarga[]>;
  listUnidadeCarga$: Observable<UnidadeCarga[]>;

  
  tipoCargaSelecionado: TipoCarga;
  modoCargaSelecionado: ModoCarga;
  unidadeCargaSelecionado: UnidadeCarga;

  
  constructor(private _fb: FormBuilder, private _dominioService: DominioService, 
    protected messageService: MessageService) {
    super()
  }

  ngOnInit() {

    this.formGroup = this._fb.group({
      cargaForm: [null]
    });

    this.listTipoCarga$ = this._dominioService.listTipoCarga();
    this.listModoCarga$ = this._dominioService.listModoCarga();
    this.listUnidadeCarga$ = this._dominioService.listUnidadeCarga();
  }

  ngAfterViewInit(): void {
    this.formGroup.setControl('cargaForm', this.cargaFormComponent.formGroup);
   }
   
}
