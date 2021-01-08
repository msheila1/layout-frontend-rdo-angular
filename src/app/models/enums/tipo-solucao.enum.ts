export enum TipoSolucaoEnum {
    RepresentacaoRequerimento = 0,
    AguardandoLaudos = 1,
    ApreciacaoDelegado = 2,
    BoFlagrante = 3,
    BoInquerito = 4,
    BoRegistro = 5, 
    EncamFebem = 6,
    EncamAreaFato = 7,
    EncamJecrim = 8,
    Oficio = 9
}

export const tipoSolucaoEnumLabel = new Map<TipoSolucaoEnum, string>([
    [TipoSolucaoEnum.AguardandoLaudos, 'Aguardando Laudos'],
    [TipoSolucaoEnum.ApreciacaoDelegado, 'Apreciação Delegado'],
    [TipoSolucaoEnum.BoFlagrante, 'Bo Flagrante'],
    [TipoSolucaoEnum.BoInquerito, 'Bo Inquérito'],
    [TipoSolucaoEnum.BoRegistro, 'Bo Registro'],
    [TipoSolucaoEnum.EncamAreaFato, 'Encaminhamento Área do Fato'],
    [TipoSolucaoEnum.EncamFebem, 'Encaminhamento Febem'],
    [TipoSolucaoEnum.EncamJecrim, 'Encaminhamento Jecrim'],
    [TipoSolucaoEnum.Oficio, 'Ofício'],
    [TipoSolucaoEnum.RepresentacaoRequerimento, 'Representação Requerimento']
]);