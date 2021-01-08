import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { TipoIntolerancia } from '../../../models/tipo-intolerancia.enum';
import { DominioService } from '../../../services/dominio.service';
import { AbstractComponent } from '../utils/abstract-component';

@Component({
  selector: 'app-secao-tratase-intolerancia',
  templateUrl: './secao-tratase-intolerancia.component.html',
  styleUrls: ['./secao-tratase-intolerancia.component.css']
})
export class SecaoTrataseIntoleranciaComponent extends AbstractComponent implements OnInit {

  dropdownTipoIntolerancia: { value: TipoIntolerancia; label: string; }[];

  constructor(private _fb: FormBuilder, private _serviceDominio: DominioService) {
    super();
  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      intoleranciaDiscriminacao: [null, [Validators.required]],
      tipoIntolerancia: [{value: TipoIntolerancia, disabled: true}],
      intoleranciaOutros: [{value: null, disabled: true}]
    });

    this.onChangeIntoleranciaDiscriminacao();
    this.onChangeTipoIntolerancia();
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
    this.dropdownTipoIntolerancia = this._serviceDominio.listTipoIntolerancia();
  }

  onChangeTipoIntolerancia() {
    this.tipoIntolerancia.valueChanges.subscribe(value => {
      if (TipoIntolerancia.Outros !== value) {
        this.intoleranciaOutros.disable({emitEvent: false});
        this.resetControl(this.intoleranciaOutros);
      } else {
        this.intoleranciaOutros.enable({emitEvent: false});
        this.intoleranciaOutros.setValidators(Validators.required);
      }
    });
  }
}
