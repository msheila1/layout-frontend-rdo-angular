import { Plantonista } from './plantonista.model';
import { AbstractModel } from '../shared/models/abstract.model';
import { Delegacia } from './delegacia.model';
import { Usuario } from './usuario.model';

export class Plantao extends AbstractModel<number> {
    dataHorarioAbertura: Date;
    dataHorarioFechamento: Date;
    delegacia: Delegacia;
    plantonista: Plantonista;
    intercorrencia: string;
}
