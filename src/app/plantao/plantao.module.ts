import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlErrorsComponent } from '../core/components/control-errors/control-errors.component';
import { ControlErrorsDirective } from '../core/directives/control-errors.directive';

import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PickListModule } from 'primeng/picklist';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

import { PlantaoAtualComponent } from './shared/plantao-atual/plantao-atual.component';
import { PlantaoAnteriorComponent } from './shared/plantao-anterior/plantao-anterior.component';
import { MovimentacaoAtualComponent } from './shared/movimentacao-atual/movimentacao-atual.component';
import { PlantonistasComponent } from './shared/plantonistas/plantonistas.component';
import { ModalDelegaciaComponent } from './shared/modal-delegacia/modal-delegacia.component';
import { ModalPlantaoComponent } from './shared/modal-plantao/modal-plantao.component';
import { PlantaoComponent } from './plantao.component';


const components: any = [
  PlantaoAtualComponent,
  PlantaoAnteriorComponent,
  MovimentacaoAtualComponent,
  PlantonistasComponent,
  ModalDelegaciaComponent,
  ModalPlantaoComponent,
  PlantaoComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    TableModule,
    PickListModule,
    AccordionModule,
    PanelModule,
    DialogModule,
    ButtonModule,
    ToastModule,
    ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  exports: components
})
export class PlantaoModule { }
