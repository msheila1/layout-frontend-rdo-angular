import { Pipe, PipeTransform } from '@angular/core';
import { tipoOcorrenciaVeiculoLabel, TipoOcorrenciaVeiculoEnum } from '../../models/enums/tipo-ocorrencia-veiculo.enum';

@Pipe({
    name: 'tipoOcorrenciaVeiculoPipe'
})
export class TipoOcorrenciaVeiculoEnumPipe implements PipeTransform {

    transform(value: TipoOcorrenciaVeiculoEnum) {
        return tipoOcorrenciaVeiculoLabel.get(value);
    }
}