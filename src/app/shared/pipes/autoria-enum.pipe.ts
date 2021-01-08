import { Pipe, PipeTransform } from '@angular/core';
import { AutoriaEnum, autoriaEnumLabel } from 'src/app/models/enums/autoria.enum';

@Pipe({
    name: 'autoriaPipe'
})
export class AutoriaEnumPipe implements PipeTransform {

    transform(value: AutoriaEnum) {
        return autoriaEnumLabel.get(value);
    }
}