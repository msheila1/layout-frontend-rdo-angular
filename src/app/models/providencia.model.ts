import { AbstractModel } from '../shared/models/abstract.model';

export class Providencia extends AbstractModel<number> {
    descricao: string;
    ativo: boolean;
}