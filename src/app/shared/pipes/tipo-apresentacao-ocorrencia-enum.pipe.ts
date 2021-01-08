import { Pipe, PipeTransform } from '@angular/core';
import { TipoApresentacaoOcorrenciaEnum, tipoApresentacaoOcorrenciaEnumLabel } from 'src/app/models/enums/tipo-apresentacao-ocorrencia.enum';

@Pipe({
    name: 'tipoApresentacaoOcorrenciaPipe'
})
export class TipoApresentacaoOcorrenciaEnumPipe implements PipeTransform {

    transform(value: TipoApresentacaoOcorrenciaEnum) {
        return tipoApresentacaoOcorrenciaEnumLabel.get(value);
    }
}