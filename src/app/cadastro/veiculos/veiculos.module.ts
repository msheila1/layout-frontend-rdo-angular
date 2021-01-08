import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { SplitButtonModule, DialogModule, CheckboxModule, RadioButtonModule } from 'primeng/primeng';
import { VeiculosComponent } from './veiculos.component';
import { VeiculoRegisterComponent } from './shared/registro/veiculo-register.component';
import { TipoOcorrenciaVeiculoEnumPipe } from 'src/app/shared/pipes/tipo-ocorrencia-veiculo-enum.pipe';
import { RdoCommonModule } from 'src/app/shared/modules/rdo-common.module';

const components: any = [
    VeiculosComponent,
    VeiculoRegisterComponent,
    TipoOcorrenciaVeiculoEnumPipe
];

@NgModule({
    declarations: components,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RdoCommonModule,
        PanelModule,
        TableModule,
        SplitButtonModule,
        DialogModule,
        DropdownModule,
        CheckboxModule, 
        RadioButtonModule
    ],
    exports: components
})
export class VeiculosModule { }