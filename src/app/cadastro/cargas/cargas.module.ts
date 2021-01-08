import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AutoCompleteModule,
  ButtonModule, 
  CalendarModule, 
  CardModule, 
  CheckboxModule,
  DropdownModule, 
  PanelModule, 
  InputTextModule, 
  InputTextareaModule, 
  RadioButtonModule, 
  SplitButtonModule } from 'primeng/primeng';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

import { AgmCoreModule } from '@agm/core';
import { BoletimocorrenciaModule } from '../boletimocorrencia/boletimocorrencia.module';
import { CargasComponent } from './cargas.component';
import { CargaDestinoComponent } from './carga-destino/carga-destino.component';
import { CargaFormComponent } from './shared/carga-form/carga-form.component';
import { CargaListComponent } from './carga-list/carga-list.component';
import { CargaLocalRecuperacaoComponent } from './carga-local-recuperacao/carga-local-recuperacao.component';
import { CargaNovoComponent } from './carga-novo/carga-novo.component';
import { CargaOrigemComponent } from './carga-origem/carga-origem.component';
import { CargaTableComponent } from './shared/carga-table/carga-table.component'
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { RdoCommonModule } from 'src/app/shared/modules/rdo-common.module';
import { CargaEditarComponent } from './carga-editar/carga-editar.component';


const components: any = [
  CargasComponent,
  CargaDestinoComponent,
  CargaEditarComponent,
  CargaFormComponent,
  CargaListComponent,
  CargaLocalRecuperacaoComponent,
  CargaNovoComponent,
  CargaOrigemComponent,
  CargaTableComponent
];

@NgModule({
  declarations: components,
  imports: [
    AutoCompleteModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAexZ4KZot11RpJfyR-LeKoKZhuzMOfpSc',
       libraries: ["places"]
    }),
    BoletimocorrenciaModule,
    ButtonModule,
    CardModule,
    CalendarModule,
    CheckboxModule,
    CommonModule,
    DropdownModule,
    FormsModule,
    GooglePlaceModule,
    InputTextModule,
    InputTextareaModule,
    RadioButtonModule,
    ReactiveFormsModule,
    RdoCommonModule,
    SplitButtonModule,
    PanelModule,
    TableModule,
    ToastModule
  ],
  exports:components,
  providers: [MessageService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CargasModule { }