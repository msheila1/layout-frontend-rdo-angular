import { AbstractModel } from '../shared/models/abstract.model';

export class ApresentacaoOcorrencia extends AbstractModel<number>{
    descricao:string;
    ativo:boolean;
}