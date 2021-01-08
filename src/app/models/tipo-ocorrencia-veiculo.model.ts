import { AbstractModel } from '../shared/models/abstract.model';
import { tipoOcorrenciaVeiculoLabel } from './enums/tipo-ocorrencia-veiculo.enum';

export class TipoOcorrenciaVeiculo extends AbstractModel<number> {

    constructor(id? : number) {
        super();
        this.id = id;
        
        if (id) {
            this.descricao = tipoOcorrenciaVeiculoLabel.get(id);
        }
    }

    listOrdem: number;
    descricao: string;
    flagAtivo: string;
    flagChassiObrigatorio: string;
}