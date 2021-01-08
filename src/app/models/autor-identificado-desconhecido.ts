import { CorCutisEnum } from 'src/app/models/enums/cor-cutis.enum';
import { AbstractModel } from '../shared/models/abstract.model';
import { SexoEnum } from './enums/sexo.enum';
import { CompleicaoEnum } from './enums/compleicao.enum';
import { AlturaAproximada } from './altura-aproximada.model';
import { IdadeAproximada } from './idade-aproximada.model';

export class AutorIdentificadoDesconhecido extends AbstractModel<number>{
    contPessoa: number;
    sexo: SexoEnum;
    idade: number;
    idadeAproximada: IdadeAproximada;
    altura: number;
    alturaAproximada: AlturaAproximada;
    idCorCutis: CorCutisEnum
    compleicao: CompleicaoEnum ;
}