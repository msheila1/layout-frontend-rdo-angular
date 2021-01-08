import { Pipe, PipeTransform } from '@angular/core';
import { SexoEnum, SexoEnumLabel } from 'src/app/models/enums/sexo.enum';

@Pipe({
    name: 'sexoPipe'
})
export class SexoEnumPipe implements PipeTransform {

    transform(value: SexoEnum) {
        return SexoEnumLabel.get(value);
    }
}