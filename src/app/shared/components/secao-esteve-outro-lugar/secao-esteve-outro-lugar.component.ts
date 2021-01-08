import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormaApresentacao } from '../../../models/forma-apresentacao.enum';
import { MessageService } from 'primeng/api';
import { AbstractComponent } from '../utils/abstract-component';

@Component({
  selector: 'app-secao-esteve-outro-lugar',
  templateUrl: './secao-esteve-outro-lugar.component.html',
  styleUrls: ['./secao-esteve-outro-lugar.component.css'],
})
export class SecaoEsteveOutroLugarComponent extends AbstractComponent implements OnInit {

  showLocalAntes = false;

  constructor(private _fb: FormBuilder, protected messageService: MessageService) {
    super();
  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      outroLugarApresentacao: [null, Validators.required],
      formaApresentacao: [null],
      localApresentacaoAntes: [null],
      tempoPermanenciaHoras: [null],
      tempoPermanenciaMin: [null]
    });

    this.onChangeEsteveOutroLugarAntes();
  }
  
  get outroLugarApresentacao() {
    return this.formGroup.get('outroLugarApresentacao');
  }

  get formaApresentacao() {
    return this.formGroup.get('formaApresentacao');
  }

  get localApresentacaoAntes() {
    return this.formGroup.get('localApresentacaoAntes');
  }

  get tempoPermanenciaHoras() {
    return this.formGroup.get('tempoPermanenciaHoras');
  }

  get tempoPermanenciaMin() {
    return this.formGroup.get('tempoPermanenciaMin');
  }

  onChangeEsteveOutroLugarAntes() {
    this.outroLugarApresentacao.valueChanges.subscribe(value => {
      this.showLocalAntes = JSON.parse(value);
      
      if (!this.showLocalAntes) {
        this.resetControl(this.formaApresentacao);
        this.resetControl(this.localApresentacaoAntes);
        this.resetControl(this.tempoPermanenciaHoras);
        this.resetControl(this.tempoPermanenciaMin);
      } else {
        this.formaApresentacao.setValidators(Validators.required);
        this.localApresentacaoAntes.setValidators(Validators.required);
        this.tempoPermanenciaHoras.setValidators([Validators.required, Validators.min(0)]);
        this.tempoPermanenciaMin.setValidators([Validators.required, Validators.min(0), Validators.max(59)]);
      }
    });
  }
}
