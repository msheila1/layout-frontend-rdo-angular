import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AbstractComponent } from '../utils/abstract-component';
import { TipoLocal } from '../../../models/tipo-local.model';
import { DominioService } from '../../../services/dominio.service';
import { SubTipoLocal } from '../../../models/subtipo-local.model';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { ReferenciaEndereco } from '../../../models/referencia-endereco.enum';
import { AutoCompleteLogradouroComponent } from '../auto-complete-logradouro/auto-complete-logradouro.component';

@Component({
  selector: 'app-secao-localizacao',
  templateUrl: './secao-localizacao.component.html',
  styleUrls: ['./secao-localizacao.component.css']
})
export class SecaoLocalizacaoComponent extends AbstractComponent implements OnInit, AfterViewInit {

  @ViewChild(AutoCompleteLogradouroComponent) autoCompleteLogradouroComponent: AbstractComponent;

  @Input() isCadastroCompleto = true;

  listTipoLocal: TipoLocal[];
  filteredListTipoLocal: TipoLocal[];

  listSubTipoLocal: SubTipoLocal[];
  filteredListSubTipoLocal: SubTipoLocal[];

  disabledTipoIntoleranciaDiscriminacao = true;
  
  constructor(private _fb: FormBuilder, private _serviceDominio: DominioService) {
    super();
  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      tipoLocal: [null, [Validators.required]],
      subTipoLocal: [{ value: null, disabled: true }],
      logradouro: [null, [Validators.required]],
      referenciaEndereco: [ReferenciaEndereco.NaoHa, [Validators.required]],
      logradouroReferencia: [{ value: null, disabled: true }],
      numeroLogradouroReferencia: [{ value: null, disabled: true }]
    });

    this.loadDropdownTipoLocal();
        
    this.onChangeTipoLocal();
    this.onChangeReferenciaEndereco();
  }

  ngAfterViewInit(): void {
    this.formGroup.setControl('logradouro', this.autoCompleteLogradouroComponent.formGroup);
  }

  get tipoLocal() {
    return this.formGroup.get('tipoLocal');
  }

  get subTipoLocal() {
    return this.formGroup.get('subTipoLocal');
  }

  get logradouro() : FormGroup {
    return <FormGroup> this.formGroup.get('logradouro');
  }

  get referenciaEndereco() {
    return this.formGroup.get('referenciaEndereco');
  }

  get logradouroReferencia() {
    return this.formGroup.get('logradouroReferencia');
  }

  get numeroLogradouroReferencia() {
    return this.formGroup.get('numeroLogradouroReferencia');
  }

  loadDropdownTipoLocal(){
    this._serviceDominio.listTipoLocal().subscribe(result => {
      this.listTipoLocal = result;
      this.filteredListTipoLocal = result;
    }, error => {
      console.log(error);
    });    
  }

  loadDropdownSubTipoLocal(idTipoLocal: number){
    this._serviceDominio.listSubTipoLocal(idTipoLocal).subscribe(result => {
      this.listSubTipoLocal = result;
      this.filteredListSubTipoLocal = result;
      if (this.listSubTipoLocal && this.listSubTipoLocal.length > 0) {
        if (this.listSubTipoLocal.length == 1) {
          this.subTipoLocal.setValue(this.listSubTipoLocal[0], {emitEvent: false});
        }
        this.subTipoLocal.enable();
        this.subTipoLocal.setValidators([Validators.required]);
      } else {
        this.subTipoLocal.setValidators(null);
        this.subTipoLocal.disable();
      }
    }, error => {
      console.log(error);
    });    
  }

  onChangeTipoLocal() {
    this.tipoLocal.valueChanges.pipe(distinctUntilChanged(),
      map(value => {
        this.subTipoLocal.setValue(null, {emitEvent: false});
        if (value && value.id) {
          let tipoLocal = <TipoLocal> value;
          this.loadDropdownSubTipoLocal(tipoLocal.id);
        } else {
          this.listSubTipoLocal = new Array<SubTipoLocal>();
          this.filteredListSubTipoLocal = new Array<SubTipoLocal>();
          this.subTipoLocal.disable();
        }
      })
    ).subscribe();
  }

  onChangeReferenciaEndereco() {
    this.referenciaEndereco.valueChanges.subscribe(value => {
      if (ReferenciaEndereco.NaoHa == value) {
        this.logradouroReferencia.setValue(null, { emitEvent: false });
        this.logradouroReferencia.disable({ emitEvent: false });
        this.logradouroReferencia.setValidators(null);
        this.numeroLogradouroReferencia.setValue(null, { emitEvent: false });
        this.numeroLogradouroReferencia.disable({ emitEvent: false });
      } else {
        this.logradouroReferencia.enable({ emitEvent: false });
        this.logradouroReferencia.setValidators(Validators.required);
        this.numeroLogradouroReferencia.enable({ emitEvent: false });
      }
    });
  }

  filterTipoLocal(event) {
    this.filteredListTipoLocal = Array<TipoLocal>();
    for(let i = 0; i < this.listTipoLocal.length; i++) {
        let tipoLocal = this.listTipoLocal[i];
        if(tipoLocal.descricao.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
            this.filteredListTipoLocal.push(tipoLocal);
        }
    }
  }

  filterSubTipoLocal(event) {
    this.filteredListSubTipoLocal = Array<SubTipoLocal>();
    for(let i = 0; i < this.listSubTipoLocal.length; i++) {
        let subTipoLocal = this.listSubTipoLocal[i];
        if(subTipoLocal.descricao.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
            this.filteredListSubTipoLocal.push(subTipoLocal);
        }
    }
  }
}
