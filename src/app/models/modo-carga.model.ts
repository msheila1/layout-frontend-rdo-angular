import { AbstractModel } from '../shared/models/abstract.model';
import { modoCargaEnumLabel } from './enums/modo-carga.enum';


export class ModoCarga extends AbstractModel<number> {

    constructor(id? : number) {
        super();
        this.id = id;
        
        if (id) {
            this.descricao = modoCargaEnumLabel.get(id);
        }
    }

    listOrdem: number;
    descricao: string;
}