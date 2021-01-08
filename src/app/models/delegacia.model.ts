import { AbstractModel } from '../shared/models/abstract.model';
import { Municipio } from './municipio.model';
import { Uf } from './uf.model';

export class Delegacia extends AbstractModel<number> {
  nome: string;
  bairro: string;
  cep: number;
  complemento: string;
  nomeFantasia: string;
  municipio: Municipio;
  uf: Uf;
  logradouro: string;
  numeroLogradouro: string;
  nomeDelegado: string;
  telefone: string;
  telefoneOutro: string;
  telefonePlantao: string;
  telefoneTitular: string;
}