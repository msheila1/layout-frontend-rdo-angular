import { Pipe, PipeTransform } from '@angular/core';
import { TipoBoEnum, tipoBoEnumLabel } from 'src/app/models/enums/tipo-bo.enum';

@Pipe({
    name: 'tipoBoPipe'
})
export class TipoBoEnumPipe implements PipeTransform {

    transform(value: TipoBoEnum) {
        return tipoBoEnumLabel.get(value);
    }
}