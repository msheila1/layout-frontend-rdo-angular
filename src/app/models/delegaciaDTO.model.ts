import { AbstractModel } from '../shared/models/abstract.model';

export class DelegaciaDTO extends AbstractModel<number> {
  nomeFantasia: string;
  nomeDelegado: string;
  telefonePlantao: string;
  telefoneTitular: string;
  telefoneOutro: string;
  telefones: string;
}

export class UserDTO extends AbstractModel<number> {
  passwordUser: string;
  password: string;
  confirmPassword: string;
}

