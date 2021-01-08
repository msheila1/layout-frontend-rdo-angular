export enum TipoProvidenciasEnum {
    MsgCapturas= 0,
    MsgCapturasDHPP = 1,
    MsgCapturasIIRGD = 2,
    MsgCapturasOficio = 3,
    MsgCepol = 4,
    MsgCepolCapturas = 5, 
    MsgCepolDHPP = 5, 
    MsgCepolIIRGD = 6,
    MsgCepolOficio = 7,
    MsgDHPP = 8,
    MsgDHPPOficio = 9,
    MsgIIRGD= 10,
    MsgIIRGDDHPP= 11,
    MsgIIRGDOficio = 12,
    MsgOficio = 13
}

export const tipoProvidenciasEnumLabel = new Map<TipoProvidenciasEnum, string>([
    [TipoProvidenciasEnum.MsgCapturas, 'Msg Capturas'],
    [TipoProvidenciasEnum.MsgCapturasDHPP, 'Msg Capturas DHPP'],
    [TipoProvidenciasEnum.MsgCapturasIIRGD, 'Msg Capturas IIRGD'],
    [TipoProvidenciasEnum.MsgCapturasOficio, 'Msg Capturas Ofício'],
    [TipoProvidenciasEnum.MsgCepol, 'Msg Cepol'],
    [TipoProvidenciasEnum.MsgCepolCapturas, 'Msg Cepol Capturas'],
    [TipoProvidenciasEnum.MsgCepolDHPP, 'Msg Cepol DHPP'],
    [TipoProvidenciasEnum.MsgCepolIIRGD, 'Msg Cepol IIRGD'],
    [TipoProvidenciasEnum.MsgCepolOficio, 'Msg Cepol Ofício'],
    [TipoProvidenciasEnum.MsgDHPP, 'Msg DHPP'],
    [TipoProvidenciasEnum.MsgDHPPOficio, 'Msg DHPP Ofício'],
    [TipoProvidenciasEnum.MsgIIRGD, 'Msg IIRGD'],
    [TipoProvidenciasEnum.MsgIIRGDDHPP, 'Msg IIRGD DHPP'],
    [TipoProvidenciasEnum.MsgIIRGDOficio, 'Msg IIRGD Ofício'],
    [TipoProvidenciasEnum.MsgOficio, 'Msg Ofício']
]);