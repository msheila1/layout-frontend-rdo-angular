import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AutoCompleteGoogle } from '../../../models/autoCompleteGoogle.model';
import { AbstractComponent } from '../utils/abstract-component';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DominioService } from '../../../services/dominio.service';

@Component({
  selector: 'app-dialog-endereco',
  templateUrl: './dialog-endereco.component.html',
  styleUrls: ['./dialog-endereco.component.css']
})
export class DialogEnderecoComponent extends AbstractComponent implements OnInit  {
  

  logradouroAutoComplete = new AutoCompleteGoogle(); //TODO:DNS nessário settar no formBuilder = "logradouro"

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  SelectButton1: string = '1';
  SelectButton2: string = '2';
  SelectButton3: string = '3';


  constructor(private _fb: FormBuilder,  private router: Router, private _serviceDominio: DominioService) { 
    super();
  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      tipoLocal: [null, [Validators.required]],
      subTipoLocal: [null, [Validators.required]],
      route: [null, [Validators.required]], //logradouro
      referencia: [null, [Validators.required]],
      rdoPrincipalNumero: [null],
      referenciaLogradouro: [null],
      referenciaNumero: [null]
    });

  }

  onClose(){
    this.displayChange.emit(false);
  }
  
}
