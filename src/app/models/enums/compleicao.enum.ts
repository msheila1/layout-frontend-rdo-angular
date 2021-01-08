export enum CompleicaoEnum {
    Gordo = 'Gordo',
    Magro = 'Magro',
    Forte = 'Forte',
    Atletico = 'Atlético'
}

export const compleicaoEnumLabel = new Map<CompleicaoEnum, string>([
    [CompleicaoEnum.Atletico, 'Atlético'],
    [CompleicaoEnum.Forte, 'Forte'],
    [CompleicaoEnum.Gordo, 'Gordo'],
    [CompleicaoEnum.Magro, 'Magro']
]);