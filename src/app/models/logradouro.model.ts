import { AbstractModel } from '../shared/models/abstract.model';

export class Logradouro extends AbstractModel<number>{
    logradouroFullName: string;
    descricaoLogradouro: string;
    idBairro: number;
    descricaoBairro: string;
    idMunicipio: number;
    descricaoMunicipio: string;
    uf: string;
    idCep: number;
    descricaoCep: string;
    fromGoogle: boolean;
    lat: number;
    lng: number;
}