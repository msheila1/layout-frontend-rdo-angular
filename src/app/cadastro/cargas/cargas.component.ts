import { AbstractComponent } from 'src/app/shared/components/utils/abstract-component';
import { ChangeDetectionStrategy, Component, OnInit, Input, ViewChild, Output } from "@angular/core";
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

import { Carga } from 'src/app/models/carga.model';
import { CargaService } from 'src/app/core/services/carga.service';
import { DominioService } from 'src/app/services/dominio.service';
import { CargaNovoComponent } from './carga-novo/carga-novo.component';
import { MessageService } from 'primeng/api';
import { CargaFormComponent } from './shared/carga-form/carga-form.component';


@Component({
  selector: "app-cargas",
  templateUrl: './cargas.component.html',
  //template: `<router-outlet></router-outlet>`,
  styles: [
    `:host {
      flex: 1;
    }`
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CargasComponent extends AbstractComponent implements OnInit{

  @ViewChild(CargaNovoComponent) cargaNovoComponent: AbstractComponent;
  @ViewChild(CargaFormComponent) cargaFormComponent: AbstractComponent;

  carga$: Observable<Carga[]>;

  constructor(private _fb: FormBuilder, 
    protected messageService: MessageService,
    private _serviceDominio: DominioService,
    private _cargaService: CargaService
    ) {
    super()
  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      carga: [null],
      cargaForm: [null]
    });
    this.carga$ = this._cargaService.listByCarga();
  }

  ngAfterViewInit(): void {
    this.formGroup.setControl('carga', this.cargaNovoComponent.formGroup);
    this.formGroup.setControl('cargaForm', this.cargaFormComponent.formGroup);
   }

   onSubmit(){
    this.validateControls();
  
     console.log(this.formGroup);
     const carga = new Carga();
     // carga.cargaForm = this.carga.value;
      
      this._cargaService.create(this.carga.value).subscribe(() => {
        if (this.formGroup.valid) {
          this.messageService.add({ severity: "success", summary: "Registro salvo com sucesso", detail: "" });
        } else {
          this.messageService.add({ severity: "error", summary: "Erro ao validar", detail: "Preencha todos os campos obrigatórios antes de prosseguir." });
        }
      });
    }

    get carga () {
      return this.formGroup.get('carga');
    }
}

