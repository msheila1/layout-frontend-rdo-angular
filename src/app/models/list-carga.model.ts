import { AbstractModel } from '../shared/models/abstract.model';

export class ListCarga extends AbstractModel<number>{
  tipo: string;
  subTipo: string;
  modo: string;
}