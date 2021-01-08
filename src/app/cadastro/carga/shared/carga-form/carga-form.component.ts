import { AbstractComponent } from "src/app/shared/components/utils/abstract-component";
import { Component, OnInit, Input } from "@angular/core";
import { ModoCarga } from 'src/app/models/modo-carga.model';
import { TipoCarga } from 'src/app/models/tipo-carga.model';
import { UnidadeCarga } from 'src/app/models/unidade-carga.model';
import { FormBuilder, Validators } from '@angular/forms';
import { Carga } from 'src/app/models/carga.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: "app-carga-form",
  templateUrl: "./carga-form.component.html",
})
export class CargaFormComponent extends AbstractComponent implements OnInit {

  @Input() carga: Carga[];
  @Input() listModoCarga: ModoCarga[];
  @Input() listTipoCarga: TipoCarga[];
  @Input() listUnidadeCarga: UnidadeCarga[];
  
  constructor(private _fb: FormBuilder, protected messageService: MessageService) {
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

  get detalheCarga() {
    return this.formGroup.get("detalheCarga");
  }
}

