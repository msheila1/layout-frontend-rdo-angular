import { Component, OnInit, Input } from '@angular/core';
import { AbstractComponent } from 'src/app/shared/components/utils/abstract-component';
import { TipoLocal } from 'src/app/models/tipo-local.model';
import { SubTipoLocal } from 'src/app/models/subtipo-local.model';
import { FormBuilder, Validators } from '@angular/forms';
import { DominioService } from 'src/app/services/dominio.service';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-tipo-local',
  templateUrl: './tipo-local.component.html',
  styleUrls: ['./tipo-local.component.css']
})
export class TipoLocalComponent extends AbstractComponent implements OnInit {

  @Input() listTipoLocal: TipoLocal[];
  filteredListTipoLocal: TipoLocal[];

  listSubTipoLocal: SubTipoLocal[];
  filteredListSubTipoLocal: SubTipoLocal[];
  
  constructor(private _fb: FormBuilder, 
              private _serviceDominio: DominioService) {
    super();
  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      tipoLocal: [null, [Validators.required]],
      subTipoLocal: [{ value: null, disabled: true }]
    });

    this.filteredListTipoLocal = this.listTipoLocal;

          
    this.onChangeTipoLocal();
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

  get tipoLocal() {
    return this.formGroup.get('tipoLocal');
  }

  get subTipoLocal() {
    return this.formGroup.get('subTipoLocal');
  }
}
