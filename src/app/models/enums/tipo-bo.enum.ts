export enum TipoBoEnum {
    TermoCircunstanciado = 5,
    BoletimOcorrencia = 7
}

export const tipoBoEnumLabel = new Map<TipoBoEnum, string>([
    [TipoBoEnum.BoletimOcorrencia, 'Boletim de Ocorrência'],
    [TipoBoEnum.TermoCircunstanciado, 'Termo Circunstanciado']
]);