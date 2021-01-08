import { Pipe, PipeTransform } from '@angular/core';
import { TipoSolucaoEnum, tipoSolucaoEnumLabel } from 'src/app/models/enums/tipo-solucao.enum';

@Pipe({
    name: 'tipoSolucaoPipe'
})
export class TipoSolucaoEnumPipe implements PipeTransform {

    transform(value: TipoSolucaoEnum) {
        return tipoSolucaoEnumLabel.get(value);
    }
}