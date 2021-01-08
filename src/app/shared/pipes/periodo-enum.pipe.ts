import { Pipe, PipeTransform } from '@angular/core';
import { PeriodoEnum, periodoEnumLabel } from 'src/app/models/enums/periodo.enum';

@Pipe({
    name: 'periodoPipe'
})
export class PeriodoEnumPipe implements PipeTransform {

    transform(value: PeriodoEnum) {
        return periodoEnumLabel.get(value);
    }
}