export enum AutoriaEnum {
    Conhecida = 'S',
    Desconhecida = 'N',
    SemAutoria = 'X'
}

export const autoriaEnumLabel = new Map<AutoriaEnum, string>([
    [AutoriaEnum.Conhecida, 'Conhecida'],
    [AutoriaEnum.Desconhecida, 'Desconhecida'],
    [AutoriaEnum.SemAutoria, 'Sem Autoria']
]);