export enum ModoCargaEnum {
    Apreendido = 1,
    ApreendidoEntregue = 2,
    Danificado = 3,
    Entregue = 4,
    Envolvido = 5,
    Extraviado = 6, 
    Subtraido = 7
}

export const modoCargaEnumLabel = new Map<ModoCargaEnum, string>([
    [ModoCargaEnum.Apreendido, 'Apreendido'],
    [ModoCargaEnum.ApreendidoEntregue, 'Apreendido/Entregue'],
    [ModoCargaEnum.Danificado, 'Danificado'],
    [ModoCargaEnum.Entregue, 'Entregue'],
    [ModoCargaEnum.Envolvido, 'Envolvido'],
    [ModoCargaEnum.Extraviado, 'Extraviado'],
    [ModoCargaEnum.Subtraido, 'Subtraído']
]);