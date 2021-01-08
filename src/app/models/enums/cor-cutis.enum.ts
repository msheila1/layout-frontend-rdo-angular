export enum CorCutisEnum {
    Amarela = 1,
    Branca = 2,
    Parda = 3,
    Preta = 4,
    Vermelha = 5,
    Outra = 99
}

export const corCutisEnumLabel = new Map<CorCutisEnum, string>([
    [CorCutisEnum.Amarela, 'Amarela'],
    [CorCutisEnum.Branca, 'Branca'],
    [CorCutisEnum.Outra, 'Outra'],
    [CorCutisEnum.Parda, 'Parda'],
    [CorCutisEnum.Preta, 'Preta'],
    [CorCutisEnum.Vermelha, 'Vermelha']
]);