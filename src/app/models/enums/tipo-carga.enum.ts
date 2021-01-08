export enum TipoCargaEnum {
    Bebidas = 1,
    CargaEspecificada = 2,
    Cigarros = 3,
    Combustiveis = 4,
    EletroEletronicos = 5,
    GenerosAlimenticios = 6, 
    Informatica = 7,
    MedicamentosPerfumaria = 8,
    Metais = 9,
    OutrasCargas = 10,
    PecasAutomotivasAcessoriosPneus = 11, 
    ProdutosQuimicos = 12,
    TexteisManufaturados = 0
}

export const tipoCargaEnumLabel = new Map<TipoCargaEnum, string>([
    [TipoCargaEnum.Bebidas, 'Bebidas'],
    [TipoCargaEnum.Cigarros, 'Carga não especificada'],
    [TipoCargaEnum.Combustiveis, 'Combustíveis'],
    [TipoCargaEnum.EletroEletronicos, 'Eletro-eletrônicos'],
    [TipoCargaEnum.GenerosAlimenticios, 'Gêneros alimentícios'],
    [TipoCargaEnum.Informatica, 'Informática'],
    [TipoCargaEnum.MedicamentosPerfumaria, 'Medicamentos/Perfumaria'],
    [TipoCargaEnum.Metais, 'Metais'],
    [TipoCargaEnum.OutrasCargas, 'Outras Cargas'],
    [TipoCargaEnum.PecasAutomotivasAcessoriosPneus, 'Peças automotivas/acessórios/pneus'],
    [TipoCargaEnum.ProdutosQuimicos, 'Produtos químicos'],
    [TipoCargaEnum.TexteisManufaturados, 'Texteis/manufaturados']
]);