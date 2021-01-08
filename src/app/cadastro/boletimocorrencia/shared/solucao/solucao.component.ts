import { Component, OnInit, Input } from '@angular/core';
import { AbstractComponent } from 'src/app/shared/components/utils/abstract-component';

import { FormBuilder, Validators } from '@angular/forms';
import { CircunscricaoDTO } from 'src/app/models/circunscricaoDTO.model';
import { TipoSolucaoEnum } from 'src/app/models/enums/tipo-solucao.enum';

@Component({
  selector: 'app-solucao',
  templateUrl: './solucao.component.html',
  styleUrls: ['./solucao.component.css']
})
export class SolucaoComponent extends AbstractComponent implements OnInit {

  @Input() listSolucao: { value: TipoSolucaoEnum; label: string }[];
  @Input()  set inputCircunscricao(circunscricao: CircunscricaoDTO[]){
              if(circunscricao.length > 0){
                this.circunscricao.setValue(circunscricao[0].descricao);
              }
            }

  constructor(private _fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      circunscricao: [null],
      tipoSolucao: [null, [Validators.required]]
    });
  }

  get tipoSolucao() {
    return this.formGroup.get("tipoSolucao");
  }

  get circunscricao() {
    return this.formGroup.get("circunscricao");
  }
}
