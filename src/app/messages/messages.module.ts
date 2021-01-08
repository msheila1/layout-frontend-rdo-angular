import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';


const components: any = [];

@NgModule({
  declarations: components,
  imports: [
    CommonModule
  ],
  exports:components,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class MessagesModule { }
