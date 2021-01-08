import { AbstractModel } from '../shared/models/abstract.model';

export class SubTipoLocal extends AbstractModel<number>{
    descricao: string;
    imei: boolean;
    idTipoLocal: number;
}