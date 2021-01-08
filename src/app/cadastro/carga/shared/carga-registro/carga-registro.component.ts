import { Component, OnInit } from "@angular/core";
import { AbstractComponent } from 'src/app/shared/components/utils/abstract-component';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-carga-registro',
  templateUrl: './carga-registro.component.html',
})
export class CargaRegistroComponent extends AbstractComponent implements OnInit{

  //tipoCargaSelecionado: TipoCarga;
 // modoCargaSelecionado: ModoCarga;
  //unidadeCargaSelecionado: UnidadeCarga;

 // listCarga$: Observable<TipoCarga[]>;
 // listModoCarga$: Observable<ModoCarga[]>;
 // listUnidadeCarga$: Observable<UnidadeCarga[]>;
  
  constructor(private _fb: FormBuilder, 
   // private _tipoCargaService: TipoCargaService,
   // private _modoCargaService: ModoCargaService,
    //private _unidadeCargaService: UnidadeCargaService,
    protected messageService: MessageService) {
    super()
  }

  ngOnInit() {
    this.buildForm();
   // this.listCarga$ = this._tipoCargaService.listAll();
   // this.listModoCarga$ = this._modoCargaService.listAll();
    //this.listUnidadeCarga$ = this._unidadeCargaService.listAll();
  }

  private buildForm() {
    this.formGroup = this._fb.group({
      'origemCarga': new FormControl('', []),
      'segurada': new FormControl('', []),
      'tipoCarga': new FormControl('', [Validators.required]),
      'subtipoCarga': new FormControl('', []),
      'modoCarga': new FormControl('', [Validators.required]),
      'unidadeCarga': new FormControl('', []),
      'detalheCarga': new FormControl('', []),
      'notasFiscais': new FormControl('', []),
      'valorCarga': new FormControl('', []),
      'serie': new FormControl('', []),
      'marca': new FormControl('', [])
    });
    
  }
}
