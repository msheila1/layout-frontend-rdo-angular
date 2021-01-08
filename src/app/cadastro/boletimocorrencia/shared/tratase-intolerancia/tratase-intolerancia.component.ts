import { Component, OnInit } from '@angular/core';
import { AbstractComponent } from 'src/app/shared/components/utils/abstract-component';
import { DominioService } from 'src/app/services/dominio.service';
import { FormBuilder, Validators } from '@angular/forms';
import { TipoIntoleranciaEnum } from 'src/app/models/enums/tipo-intolerancia.enum';

@Component({
  selector: 'app-tratase-intolerancia',
  templateUrl: './tratase-intolerancia.component.html',
  styleUrls: ['./tratase-intolerancia.component.css']
})
export class TrataseIntoleranciaComponent extends AbstractComponent implements OnInit {

  listTipoIntolerancia: { value: TipoIntoleranciaEnum; label: string; }[];

  constructor(private _fb: FormBuilder, private _serviceDominio: DominioService) {
    super();
  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      intoleranciaDiscriminacao: [null, [Validators.required]],
      tipoIntolerancia: [{value: TipoIntoleranciaEnum, disabled: true}],
      intoleranciaOutros: [{value: null, disabled: true}]
    });

    this.onChangeIntoleranciaDiscriminacao();
    this.onChangeTipoIntolerancia();
  }

  onChangeIntoleranciaDiscriminacao() {
    this.intoleranciaDiscriminacao.valueChanges.subscribe(value => {
      if (value !== 'S') {
        this.tipoIntolerancia.disable({emitEvent: false});
        this.resetControl(this.tipoIntolerancia);
      } else {
        this.loadDropdownTipoIntolerancia();
        this.tipoIntolerancia.enable({emitEvent: false});
        this.tipoIntolerancia.setValidators(Validators.required);
      }
    });
  }

  loadDropdownTipoIntolerancia() {
    this.listTipoIntolerancia = this._serviceDominio.listTipoIntolerancia();
  }

  onChangeTipoIntolerancia() {
    this.tipoIntolerancia.valueChanges.subscribe(value => {
      if (TipoIntoleranciaEnum.Outros !== value) {
        this.intoleranciaOutros.disable({emitEvent: false});
        this.resetControl(this.intoleranciaOutros);
      } else {
        this.intoleranciaOutros.enable({emitEvent: false});
        this.intoleranciaOutros.setValidators(Validators.required);
      }
    });
  }

  get intoleranciaDiscriminacao() {
    return this.formGroup.get('intoleranciaDiscriminacao');
  }

  get tipoIntolerancia() {
    return this.formGroup.get('tipoIntolerancia');
  }

  get intoleranciaOutros() {
    return this.formGroup.get('intoleranciaOutros');
  }
}
