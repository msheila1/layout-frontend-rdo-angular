export enum PeriodoEnum {
    Madrugada = 2500,
    Manha = 2600,
    Tarde = 2700,
    Noite = 2800,
    HoraIncerta = 2900
}

export const periodoEnumLabel = new Map<PeriodoEnum, string>([
    [PeriodoEnum.HoraIncerta, 'Hora Incerta'],
    [PeriodoEnum.Madrugada, 'Madrugada'],
    [PeriodoEnum.Manha, 'Manhã'],
    [PeriodoEnum.Noite, 'Noite'],
    [PeriodoEnum.Tarde, 'Tarde']
]);