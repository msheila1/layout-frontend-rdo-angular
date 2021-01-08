import { Pipe, PipeTransform } from '@angular/core';
import { TipoIntoleranciaEnum, tipoIntoleranciaEnumLabel } from 'src/app/models/enums/tipo-intolerancia.enum';

@Pipe({
    name: 'tipoIntoleranciaEnumPipe'
})
export class TipoIntoleranciaEnumPipe implements PipeTransform {

    transform(value: TipoIntoleranciaEnum) {
        return tipoIntoleranciaEnumLabel.get(value);
    }
}