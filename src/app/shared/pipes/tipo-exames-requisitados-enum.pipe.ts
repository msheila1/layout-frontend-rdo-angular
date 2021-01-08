import { Pipe, PipeTransform } from '@angular/core';
import { TipoExamesRequisitadosEnum, tipoExamesRequisitadosEnumLabel } from 'src/app/models/enums/tipo-exames-requisitados.enum';

@Pipe({
    name: 'tipoExamesRequisitadosPipe'
})
export class TipoExamesRequisitadosEnumPipe implements PipeTransform {

    transform(value: TipoExamesRequisitadosEnum) {
        return tipoExamesRequisitadosEnumLabel.get(value);
    }
}