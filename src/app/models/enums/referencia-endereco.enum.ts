export enum ReferenciaEnderecoEnum {
    NaoHa = 'N',
    EsquinaCom = 'E',
    Proximo = 'P',
    OutraCidade = 'O'
}

export const referenciaEnderecoEnumLabel = new Map<ReferenciaEnderecoEnum, string>([
    [ReferenciaEnderecoEnum.NaoHa, 'Não Há'],
    [ReferenciaEnderecoEnum.EsquinaCom, 'Esquina Com'],
    [ReferenciaEnderecoEnum.Proximo, 'Próximo'],
    [ReferenciaEnderecoEnum.OutraCidade, 'Outra Cidade']
]);