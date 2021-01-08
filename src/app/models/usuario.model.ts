import { AbstractModel } from '../shared/models/abstract.model';

export class Usuario extends AbstractModel<number> {
  rg: string;
  nome: string;
  passwordUser: string;
  password: string;
  confirmPassword: string;
}
