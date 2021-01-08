import { Pipe, PipeTransform } from '@angular/core';
import { CompleicaoEnum, compleicaoEnumLabel } from 'src/app/models/enums/compleicao.enum';

@Pipe({
    name: 'combustivelPipe'
})
export class CompleicaoEnumPipe implements PipeTransform {

    transform(value: CompleicaoEnum) {
        return compleicaoEnumLabel.get(value);
    }
}