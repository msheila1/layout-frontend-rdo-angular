import { AbstractModel } from '../shared/models/abstract.model';
import { unidadeCargaEnumLabel } from './enums/unidade-carga.enum';


export class UnidadeCarga extends AbstractModel<number> {

    constructor(id? : number) {
        super();
        this.id = id;
        
        if (id) {
            this.descricao = unidadeCargaEnumLabel.get(id);
        }
    }

    listOrdem: number;
    descricao: string;
}