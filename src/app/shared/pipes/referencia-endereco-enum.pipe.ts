import { Pipe, PipeTransform } from '@angular/core';
import { ReferenciaEnderecoEnum, referenciaEnderecoEnumLabel } from 'src/app/models/enums/referencia-endereco.enum';

@Pipe({
    name: 'referenciaEnderecoPipe'
})
export class ReferenciaEnderecoEnumPipe implements PipeTransform {

    transform(value: ReferenciaEnderecoEnum) {
        return referenciaEnderecoEnumLabel.get(value);
    }
}