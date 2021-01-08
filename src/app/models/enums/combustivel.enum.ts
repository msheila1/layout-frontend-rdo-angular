export enum CombustivelEnum {
    Alcool = 1,
    Gasolina = 2,
    Diesel = 3,
    Gasogenio = 4,
    GasMetano = 5,
    EletricoFonteInterna = 6,
    EletricoFonteExterna = 7,
    GasolinaGnc = 8,
    AlcoolGnc = 9,
    DieselGnc = 10,
    AlcoolGnv = 11,
    GasolinaGnv = 12,
    DieselGnv = 13,
    Gnv = 14,
    AlcoolGasolina = 15,
    AlcoolGasolinaGnv = 16,
    GasolinaEletrico = 17
}

export const combustivelEnumLabel = new Map<CombustivelEnum, string>([
    [CombustivelEnum.Alcool, 'Álcool'],
    [CombustivelEnum.Gasolina, 'Gasolina'],
    [CombustivelEnum.Diesel, 'Diesel'],
    [CombustivelEnum.Gasogenio, 'Gasogênio'],
    [CombustivelEnum.GasMetano, 'Gás Metano'],
    [CombustivelEnum.EletricoFonteInterna, 'Elétrico Fonte Interna'],
    [CombustivelEnum.EletricoFonteExterna, 'Elétrico Fonte Externa'],
    [CombustivelEnum.GasolinaGnc, 'Gasolina/Gnc'],
    [CombustivelEnum.AlcoolGnc, 'Álcool/Gnc'],
    [CombustivelEnum.DieselGnc, 'Diesel/Gnc'],
    [CombustivelEnum.AlcoolGnv, 'Álcool/Gnv'],
    [CombustivelEnum.GasolinaGnv, 'Gasolina/Gnv'],
    [CombustivelEnum.DieselGnv, 'Diesel/Gnv'],
    [CombustivelEnum.Gnv, 'Gnv'],
    [CombustivelEnum.AlcoolGasolina, 'Álcool/Gasolina'],
    [CombustivelEnum.AlcoolGasolinaGnv, 'Álcool/Gasolina/Gnv'],
    [CombustivelEnum.GasolinaEletrico, 'Gasolina/Elétrico']
])