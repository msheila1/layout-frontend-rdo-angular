import { AbstractModel } from '../shared/models/abstract.model';
import { Municipio } from './municipio.model';
import { Pessoa } from './pessoa.model';
import { Uf } from './uf.model';
import { TipoLocal } from './tipo-local.model';
import { CombustivelEnum } from './enums/combustivel.enum';
import { MarcaVeiculo } from './marca-veiculo.model';
import { TipoVeiculoEnum } from './enums/tipo-veiculo.enum';
import { TipoOcorrenciaVeiculoEnum } from './enums/tipo-ocorrencia-veiculo.enum';
import { CorVeiculoEnum } from './enums/cor-veiculo.enum';

export class Veiculo extends AbstractModel<number> {

    anoFabricacao: number;
    anoModelo: number;
    apolice: number;
    buscaRdo: number;
    chassiRemarcado: number;
    escolta: number;
    seguro: number;
    tempoAbandono: number;

    buscaDetran: string;
    chassi: string;
    cidade: string;
    documentosLevados: string;
    logotipo: string;
    nomeProprietario: string;
    observacao: string;
    placa: string;
    renavan: string;
    seguradora: string;
    
    placaAntiga: boolean;

    combustivel: CombustivelEnum;
    cor: CorVeiculoEnum;
    marca: MarcaVeiculo;
    municipio: Municipio;
    tipoOcorrenciaVeiculo: TipoOcorrenciaVeiculoEnum;
    tipo: TipoVeiculoEnum;

    pessoa: Pessoa;
    tipoLocal: TipoLocal;
    uf: Uf;
}