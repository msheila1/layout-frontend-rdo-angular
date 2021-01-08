import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlErrorsComponent } from 'src/app/core/components/control-errors/control-errors.component';
import { ControlErrorsDirective } from 'src/app/core/directives/control-errors.directive';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [ControlErrorsComponent, ControlErrorsDirective], 
  imports: [
    CommonModule
  ],
  exports: [ControlErrorsComponent, ControlErrorsDirective],
  entryComponents: [ControlErrorsComponent]
})
export class RdoCommonModule { }