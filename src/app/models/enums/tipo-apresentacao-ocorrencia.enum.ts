export enum TipoApresentacaoOcorrenciaEnum {
    ParteInteressada = 0,
    IntegrantesPoliciaMilitar = 1,
    GuardasCivisMetropolitanos = 2,
    Outros = 3,
    IntegrantesPoliciaCivil = 4
}

export const tipoApresentacaoOcorrenciaEnumLabel = new Map<TipoApresentacaoOcorrenciaEnum, string>([
    [TipoApresentacaoOcorrenciaEnum.GuardasCivisMetropolitanos, 'Guardas Civis Metropolitanos'],
    [TipoApresentacaoOcorrenciaEnum.IntegrantesPoliciaCivil, 'Integrantes Polícia Civil'],
    [TipoApresentacaoOcorrenciaEnum.IntegrantesPoliciaMilitar, 'Integrantes Polícia Militar'],
    [TipoApresentacaoOcorrenciaEnum.Outros, 'Outros'],
    [TipoApresentacaoOcorrenciaEnum.ParteInteressada, 'Parte Interessada']
]);