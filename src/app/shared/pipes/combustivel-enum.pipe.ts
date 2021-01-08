import { Pipe, PipeTransform } from '@angular/core';
import { CombustivelEnum, combustivelEnumLabel } from 'src/app/models/enums/combustivel.enum';

@Pipe({
    name: 'combustivelPipe'
})
export class CombustivelEnumPipe implements PipeTransform {

    transform(value: CombustivelEnum) {
        return combustivelEnumLabel.get(value);
    }
}