import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';

import { HomeTableComponent } from './shared/home-table/home-table.component';
import { HomeCardComponent } from './shared/home-card/home-card.component';
import { HomeGraficoComponent } from './shared/home-grafico/home-grafico.component';
import { RdoCommonModule } from '../shared/modules/rdo-common.module';

const components: any = [
  HomeTableComponent,
  HomeCardComponent,
  HomeGraficoComponent
];

@NgModule({
  declarations: [components], 
  imports: [
    RdoCommonModule,
    CommonModule,
    TableModule,
    ChartModule,
    CardModule
  ],
  exports:components,
  entryComponents:components
})
export class HomeModule { }
