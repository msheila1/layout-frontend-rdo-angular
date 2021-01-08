import { Component, OnInit, Input } from '@angular/core';
import { AbstractComponent } from 'src/app/shared/components/utils/abstract-component';

import { ApresentacaoOcorrencia } from 'src/app/models/apresentacaoOcorrencia.model';
import { FormBuilder, Validators } from '@angular/forms';
import { 

  TipoBoEnum } from 'src/app/models/enums/tipo-bo.enum';

@Component({
  selector: 'app-apresentacao-ocorrencia',
  templateUrl: './apresentacao-ocorrencia.component.html',
  styleUrls: ['./apresentacao-ocorrencia.component.css']
})
export class ApresentacaoOcorrenciaComponent extends AbstractComponent implements OnInit {
 
  @Input() tipoBo: TipoBoEnum;

  @Input() listApresentacaoOcorrencia:ApresentacaoOcorrencia[];

  constructor(private _fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      apresentacaoOcorrencia: [null, Validators.required],
      apresentacaoOutros: [{ value: null, disabled: true }]
    });

    this.onChangeApresentacaoOutros();
  }

  onChangeApresentacaoOutros() {
    this.apresentacaoOcorrencia.valueChanges.subscribe((value:ApresentacaoOcorrencia) => {
      if(value){
        if (value.descricao.toUpperCase().search("OUTROS") == -1) {
          this.apresentacaoOutros.setValue(null);
          this.apresentacaoOutros.setValidators(null);
          this.apresentacaoOutros.disable();
        } else {
          this.apresentacaoOutros.setValidators(Validators.required);
          this.apresentacaoOutros.enable({emitEvent: false});
        }
      }
    });
  }

  get apresentacaoOcorrencia() {
    return this.formGroup.get('apresentacaoOcorrencia');
  }

  get apresentacaoOutros() {
    return this.formGroup.get('apresentacaoOutros');
  }
}
