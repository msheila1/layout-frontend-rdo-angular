import { AbstractModel } from '../shared/models/abstract.model';
import { Plantao } from './plantao.model';
import { Usuario } from './usuario.model';

export class Plantonista extends AbstractModel<number>{
    dataHoraEntrada: Date;
    dataHoraSaida: Date;
    plantao: Plantao;
    usuario: Usuario;
}
