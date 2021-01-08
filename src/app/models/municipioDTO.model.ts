import { AbstractModel } from '../shared/models/abstract.model';

export class MunicipioDTO extends AbstractModel<number>{
    id_detran: number;
    nome_ibge: string;
    id_uf: string;
}