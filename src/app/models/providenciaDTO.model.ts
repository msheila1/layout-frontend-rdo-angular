import { AbstractModel } from '../shared/models/abstract.model';

export class ProvidenciaDTO extends AbstractModel<number> {
    descricao: string;
    ativo: boolean;
}