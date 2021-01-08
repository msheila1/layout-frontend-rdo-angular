import { Pipe, PipeTransform } from '@angular/core';
import { FormaApresentacaoEnum, formaApresentacaoEnumLabel } from 'src/app/models/enums/forma-apresentacao.enum';

@Pipe({
    name: 'formaApresentacaoPipe'
})
export class FormaApresentacaoEnumPipe implements PipeTransform {

    transform(value: FormaApresentacaoEnum) {
        return formaApresentacaoEnumLabel.get(value);
    }
}