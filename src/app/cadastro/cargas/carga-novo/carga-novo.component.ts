import { AbstractComponent } from 'src/app/shared/components/utils/abstract-component';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from "@angular/core";

import { DominioService } from 'src/app/services/dominio.service';
import { CargaService } from 'src/app/core/services/carga.service';
import { CargaFormComponent } from '../shared/carga-form/carga-form.component';
import { Observable } from 'rxjs';

import { Carga } from 'src/app/models/carga.model';
import { ModoCarga } from 'src/app/models/modo-carga.model';
import { TipoCarga } from 'src/app/models/tipo-carga.model';
import { UnidadeCarga } from 'src/app/models/unidade-carga.model';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-carga-novo',
  templateUrl: './carga-novo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CargaNovoComponent extends AbstractComponent implements OnInit{

  @ViewChild(CargaFormComponent) cargaFormComponent: AbstractComponent;

  modoCarga$: Observable<ModoCarga[]>;
  tipoCarga$: Observable<TipoCarga[]>
  unidadeCarga$: Observable<UnidadeCarga[]>;

  constructor(private _fb: FormBuilder, private _serviceDominio: DominioService, private _cargaService: CargaService) {
    super()
  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      cargaForm: [null]
    });
    this.modoCarga$ = this._serviceDominio.listModoCarga();
    this.tipoCarga$ = this._serviceDominio.listTipoCarga();
    this.unidadeCarga$ = this._serviceDominio.listUnidadeCarga();
  }

  ngAfterViewInit(): void {
    this.formGroup.setControl('cargaForm', this.cargaFormComponent.formGroup);
   }
}
