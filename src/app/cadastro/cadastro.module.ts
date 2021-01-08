import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { HomeModule } from '../home/home.module';
import { LightboxModule } from 'primeng/lightbox';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { ReactiveFormsModule } from '@angular/forms';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AccordionModule } from 'primeng/accordion';

import { MessageService } from 'primeng/api';
import { RdoCommonModule } from '../shared/modules/rdo-common.module';
import { CadastroCompletoComponent } from '../cadastro/cadastro.component';
import { HistoricoModule } from '../cadastro/historico/historico.module';
import { BoletimocorrenciaModule } from './boletimocorrencia/boletimocorrencia.module';
import { CargasModule } from './cargas/cargas.module';

import { VeiculosModule } from './veiculos/veiculos.module';


const components: any = [  
  CadastroCompletoComponent
];

@NgModule({
  declarations: components,
  imports: [
    RdoCommonModule,
    CommonModule,
    ButtonModule,
    DialogModule,
    HomeModule,
    LightboxModule,
    InputTextModule,
    PanelModule,
    TooltipModule,
    ToastModule,
    ReactiveFormsModule,
    OverlayPanelModule,
    RadioButtonModule,
    AccordionModule,
    HistoricoModule,
    BoletimocorrenciaModule,
    CargasModule,
    VeiculosModule
  ],
  exports:components,
  providers: [MessageService]
})
export class CadastroCompletoModule { }