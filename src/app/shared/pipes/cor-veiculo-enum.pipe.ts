import { Pipe, PipeTransform } from '@angular/core';
import { CorVeiculoEnum, corVeiculoEnumLabel } from 'src/app/models/enums/cor-veiculo.enum';

@Pipe({
    name: 'corVeiculoPipe'
})
export class CorVeiculoEnumPipe implements PipeTransform {

    transform(value: CorVeiculoEnum) {
        return corVeiculoEnumLabel.get(value);
    }
}