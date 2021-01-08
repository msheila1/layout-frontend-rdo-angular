import { AbstractModel } from '../shared/models/abstract.model';

export class MarcaVeiculo extends AbstractModel<number> {
    cdMarca: number;
    descricao: string;
    flagAtivo: string;
    listOrdem: number;
}