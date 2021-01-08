import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdoCommonModule } from 'src/app/shared/modules/rdo-common.module';
import { BoletimocorrenciaComponent } from './boletimocorrencia.component';
import { MessageService } from 'primeng/api';
import { InputTextModule, TooltipModule, RadioButtonModule, CalendarModule, DropdownModule, CheckboxModule, AutoCompleteModule } from 'primeng/primeng';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IdentificaoRdoComponent } from './shared/identificao-rdo/identificao-rdo.component';
import { TipoLocalComponent } from './shared/tipo-local/tipo-local.component';
import { EnderecoAutoCompleteComponent } from './shared/endereco-auto-complete/endereco-auto-complete.component';
import { FlagranteAutoriaComponent } from './shared/flagrante-autoria/flagrante-autoria.component';
import { EsteveOutroLugarComponent } from './shared/esteve-outro-lugar/esteve-outro-lugar.component';
import { TrataseIntoleranciaComponent } from './shared/tratase-intolerancia/tratase-intolerancia.component';
import { ApresentacaoOcorrenciaComponent } from './shared/apresentacao-ocorrencia/apresentacao-ocorrencia.component';
import { SolucaoComponent } from './shared/solucao/solucao.component';
import { TableModule } from 'primeng/components/table/table';
import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { ToastModule } from 'primeng/toast';

const components: any = [
  BoletimocorrenciaComponent,
  IdentificaoRdoComponent,
  TipoLocalComponent,
  EnderecoAutoCompleteComponent,
  FlagranteAutoriaComponent,
  EsteveOutroLugarComponent,
  TrataseIntoleranciaComponent,
  SolucaoComponent,
  ApresentacaoOcorrenciaComponent
];

@NgModule({
  declarations: components,
  imports: [
    RdoCommonModule,
    CommonModule,
    ReactiveFormsModule,
    RadioButtonModule,
    CalendarModule,
    TooltipModule,
    InputTextModule,
    DropdownModule,
    TableModule,
    CheckboxModule,
    FormsModule,
    AutoCompleteModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAexZ4KZot11RpJfyR-LeKoKZhuzMOfpSc',
       libraries: ["places"]
    }),
    ToastModule
  ],
  exports:components,
  providers: [MessageService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class BoletimocorrenciaModule { }
