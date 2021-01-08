export enum UnidadeCargaEnum {
    Caixa = 1,
    Centimetro = 2,
    Grama = 3,
    Lata = 4,
    Litro = 5,
    MetroQuadrado = 6, 
    Metro = 7,
    Outros = 8, 
    Pacote = 9, 
    Peca = 10,
    Quilo = 11,
    Quilometro = 12, 
    Saco = 13, 
    Unidade = 14, 
    Valor = 15
}

export const unidadeCargaEnumLabel = new Map<UnidadeCargaEnum, string>([
    [UnidadeCargaEnum.Caixa, 'Caixa'],
    [UnidadeCargaEnum.Centimetro, 'Centímetro'],
    [UnidadeCargaEnum.Grama, 'Grama'],
    [UnidadeCargaEnum.Lata, 'Lata'],
    [UnidadeCargaEnum.Litro, 'Litro'],
    [UnidadeCargaEnum.MetroQuadrado, 'Metro Quadrado'],
    [UnidadeCargaEnum.Metro, 'Metro'],
    [UnidadeCargaEnum.Outros, 'Outros'],
    [UnidadeCargaEnum.Pacote, 'Pacote'],
    [UnidadeCargaEnum.Peca, 'Peça'],
    [UnidadeCargaEnum.Quilo, 'Quilo'],
    [UnidadeCargaEnum.Quilometro, 'Quilômetro'],
    [UnidadeCargaEnum.Saco, 'Saco'],
    [UnidadeCargaEnum.Unidade, 'Unidade'],
    [UnidadeCargaEnum.Valor, 'Valor']
]);