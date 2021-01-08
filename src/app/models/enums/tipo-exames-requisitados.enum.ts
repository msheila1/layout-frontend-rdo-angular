export enum TipoExamesRequisitadosEnum {
    IC = 0,
    ICML = 1,
    IML = 2,
    SVO = 3
}

export const tipoExamesRequisitadosEnumLabel = new Map<TipoExamesRequisitadosEnum, string>([
    [TipoExamesRequisitadosEnum.IC, 'IC'],
    [TipoExamesRequisitadosEnum.ICML, 'ICML'],
    [TipoExamesRequisitadosEnum.IML, 'IML'],
    [TipoExamesRequisitadosEnum.SVO, 'SVO']
]);