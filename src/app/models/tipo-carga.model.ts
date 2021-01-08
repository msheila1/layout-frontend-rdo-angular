import { AbstractModel } from '../shared/models/abstract.model';
import { tipoCargaEnumLabel } from './enums/tipo-carga.enum';

export class TipoCarga extends AbstractModel<number> {

    constructor(id? : number) {
        super();
        this.id = id;
        
        if (id) {
            this.descricao = tipoCargaEnumLabel.get(id);
        }
    }

    listOrdem: number;
    descricao: string;
}