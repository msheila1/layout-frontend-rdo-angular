import { AbstractModel } from '../shared/models/abstract.model';
import { TipoCargaEnum } from './enums/tipo-carga.enum';
import { OrigemCargaEnum } from './enums/origem-carga.enum';
import { UnidadeCargaEnum } from './enums/unidade-carga.enum';
import { ModoCargaEnum } from './enums/modo-carga.enum';


export class Carga extends AbstractModel<number> {
origemCarga: OrigemCargaEnum;  
segurada: boolean;
tipoCarga: TipoCargaEnum;
modoCarga: ModoCargaEnum;
unidadeCarga: UnidadeCargaEnum;
notasFiscais: String;
subtipoCarga: String;
valorCarga: Number;
serie: String;
marca: String;
detalheCarga: String;

nome: string;
bairro: string;
cep: number;
complemento: string;
nomeFantasia: string;
logradouro: string;
numeroLogradouro: string;
nomeDelegado: string;
telefone: string;
telefoneOutro: string;
telefonePlantao: string;
telefoneTitular: string;

}
