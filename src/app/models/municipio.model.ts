import { AbstractModel } from '../shared/models/abstract.model';

export class Municipio extends AbstractModel<number>{
    ativo: boolean;
    cdMunicipio: number;
    idIbge: number;
    idDetran: number;
    idUf: number;
    nome: string;
    nomeIbge: string;
}