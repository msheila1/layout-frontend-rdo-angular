export enum TipoIntoleranciaEnum {
    Homofobia = 0,
    Racial = 1,
    Origem = 2,
    Religioso = 3,
    Outros = 4
}

export const tipoIntoleranciaEnumLabel = new Map<TipoIntoleranciaEnum, string>([
    [TipoIntoleranciaEnum.Homofobia, 'Homofobia'],
    [TipoIntoleranciaEnum.Origem, 'Origem'],
    [TipoIntoleranciaEnum.Outros, 'Outros'],
    [TipoIntoleranciaEnum.Racial, 'Racial'],
    [TipoIntoleranciaEnum.Religioso, 'Religioso']
]);