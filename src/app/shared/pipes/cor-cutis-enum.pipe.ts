import { Pipe, PipeTransform } from '@angular/core';
import { CorCutisEnum, corCutisEnumLabel } from 'src/app/models/enums/cor-cutis.enum';

@Pipe({
    name: 'corCutisPipe'
})
export class CorCutisEnumPipe implements PipeTransform {

    transform(value: CorCutisEnum) {
        return corCutisEnumLabel.get(value);
    }
}