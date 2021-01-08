import { Pipe, PipeTransform } from '@angular/core';
import { tipoProvidenciasEnumLabel, TipoProvidenciasEnum } from 'src/app/models/enums/tipo-providencias.enum';

@Pipe({
    name: 'tipoProvidenciasPipe'
})
export class TipoProvidenciasEnumPipe implements PipeTransform {

    transform(value: TipoProvidenciasEnum) {
        return tipoProvidenciasEnumLabel.get(value);
    }
}