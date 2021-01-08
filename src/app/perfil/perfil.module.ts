import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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

import { EditarDelegaciaPanelComponent } from './shared/editar-delegacia-panel/editar-delegacia-panel.component';
import { AlterarSenhaPanelComponent } from './shared/alterar-senha-panel/alterar-senha-panel.componet';
import { DelegaciaPanelComponent } from './shared/delegacia-panel/delegacia-panel.component';
import { PerfilPanelComponent } from './shared/perfil-panel/perfil-panel.component'
import { PerfilComponent } from './perfil.component';
import { MessageService } from 'primeng/api';
import { RdoCommonModule } from '../shared/modules/rdo-common.module';


const components: any = [
  EditarDelegaciaPanelComponent,
  AlterarSenhaPanelComponent,
  DelegaciaPanelComponent,
  PerfilPanelComponent,
  PerfilComponent
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
    OverlayPanelModule
  ],
  exports:components,
  providers: [MessageService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PerfilModule { }
