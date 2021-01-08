export enum FormaApresentacaoEnum {
    Espontanea = 'E',
    Conduzida = 'C'
}

export const formaApresentacaoEnumLabel = new Map<FormaApresentacaoEnum, string>([
    [FormaApresentacaoEnum.Espontanea, 'Espontânea'],
    [FormaApresentacaoEnum.Conduzida, 'Conduzida']
]);