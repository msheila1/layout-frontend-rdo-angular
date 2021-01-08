import { AbstractComponent } from "src/app/shared/components/utils/abstract-component";
import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';

import { ModoCarga } from 'src/app/models/modo-carga.model';
import { TipoCarga } from 'src/app/models/tipo-carga.model';
import { UnidadeCarga } from 'src/app/models/unidade-carga.model';
import { Carga } from 'src/app/models/carga.model';


@Component({
  selector: "app-carga-form",
  templateUrl: "./carga-form.component.html",
})
export class CargaFormComponent extends AbstractComponent implements OnInit {
  
  @Input() modoCarga: ModoCarga[];
  @Input() tipoCarga: TipoCarga[];
  @Input() unidadeCarga: UnidadeCarga[];

  @Input() carga: Carga = new Carga();
  
  constructor(private _fb: FormBuilder) {
    super()
  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      origemCarga: [null],
      segurada: [null],
      tipoCarga:  [null, Validators.required],
      subtipoCarga:  [null],
      modoCarga:  [null, Validators.required],
      unidadeCarga:  [null],
      detalheCarga:  [null],
      notasFiscais:  [null],
      valorCarga:  [null],
      serie:  [null],
      marca:  [null]
    })
  }
}

