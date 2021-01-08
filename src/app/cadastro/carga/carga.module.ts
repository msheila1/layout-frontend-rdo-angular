import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonModule, CardModule, PanelModule, SplitButtonModule, DropdownModule, InputTextModule, RadioButtonModule, InputTextareaModule, CalendarModule, CheckboxModule, AutoCompleteModule } from 'primeng/primeng';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';

import { RdoCommonModule } from 'src/app/shared/modules/rdo-common.module';
import { CargaComponent } from '../carga/carga.component';
import { CargaRegistroComponent } from './shared/carga-registro/carga-registro.component';
import { CargaDestinoComponent } from './shared/carga-destino/carga-destino.component';
import { CargaOrigemComponent } from './shared/carga-origem/carga-origem.component';
import { CargaLocalComponent } from './shared/carga-local/carga-local.component';
import { BoletimocorrenciaModule } from '../boletimocorrencia/boletimocorrencia.module';
import { ToastModule } from 'primeng/toast';
import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { CargaTableComponent } from './shared/carga-table/carga-table.component';
import { CargaFormComponent } from './shared/carga-form/carga-form.component';
import { CargaNovoComponent } from './carga-novo/carga-novo.component';
import { CargaEditarComponent } from './carga-editar/carga-editar.component';



const components: any = [
  CargaComponent,
  CargaFormComponent,
  CargaTableComponent,
  CargaNovoComponent,
  CargaEditarComponent
  //CargaRegistroComponent,
  //CargaDestinoComponent,
 // CargaOrigemComponent,
 // CargaLocalComponent
];

@NgModule({
  declarations: components,
  imports: [
    RdoCommonModule,
    ButtonModule,
    CardModule,
    CalendarModule,
    CommonModule,
    CheckboxModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    RadioButtonModule,
    ReactiveFormsModule,
    TableModule,
    ToastModule,
    PanelModule,
    SplitButtonModule,
    BoletimocorrenciaModule,
    AutoCompleteModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAexZ4KZot11RpJfyR-LeKoKZhuzMOfpSc',
       libraries: ["places"]
    }),
  ],
  exports:components,
  providers: [MessageService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CargaModule { }