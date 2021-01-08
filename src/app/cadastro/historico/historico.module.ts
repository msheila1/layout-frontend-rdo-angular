import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/primeng';
import { CommonModule } from '@angular/common';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

import { RdoCommonModule } from 'src/app/shared/modules/rdo-common.module';
import { HistoricoComponent } from './historico.component';


const components: any = [
  HistoricoComponent
];

@NgModule({
  declarations: components,
  imports: [
    ButtonModule,
    ConfirmDialogModule,
    CommonModule,
    EditorModule,
    InputTextModule,
    ReactiveFormsModule,
    RdoCommonModule,
    ToastModule
    
  ],
  exports:components,
  providers: [MessageService]
})
export class HistoricoModule { }