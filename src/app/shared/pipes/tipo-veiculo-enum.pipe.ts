import { Pipe, PipeTransform } from '@angular/core';
import { TipoVeiculoEnum, tipoVeiculoEnumLabel } from 'src/app/models/enums/tipo-veiculo.enum';

@Pipe({
    name: 'tipoVeiculoPipe'
})
export class TipoVeiculoEnumPipe implements PipeTransform {

    transform(value: TipoVeiculoEnum) {
        return tipoVeiculoEnumLabel.get(value);
    }
}