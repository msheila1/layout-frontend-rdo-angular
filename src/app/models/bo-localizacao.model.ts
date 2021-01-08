import { AbstractModel } from '../shared/models/abstract.model';
import { TipoLocal } from './tipo-local.model';
import { SubTipoLocal } from './subtipo-local.model';
import { ReferenciaEnderecoEnum } from './enums/referencia-endereco.enum';

export class BoLocalizacao extends AbstractModel<number>{
    tipoLocal: TipoLocal;
    subTipoLocal: SubTipoLocal;
    logradouro: string;
    numeroLogradouro: number;
    bairro: string;
    cep: string;
    complemento: string;
    cidade: string;
    idMunicipio: number;
    uf: string;
    latitude: number;
    longitude: number;
    referenciaEndereco: ReferenciaEnderecoEnum;
    logradouroReferencia: string;
    numeroLogradouroReferencia: number;
    latitudeReferencia: number;
    longitudeReferencia: number;
}