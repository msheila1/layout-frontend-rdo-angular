import { EstatisticaTipoOcorrenciaReferencia } from './estatistica-tipo-ocorrencia-referencia.model';

export class EstatisticaTipoOcorrencia {
    id: number;
    descricao: string; 
    referencias: EstatisticaTipoOcorrenciaReferencia[]; 
}