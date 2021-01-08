export enum OrigemCargaEnum {
  Nacional = 1,
  Importada = 2
}

export const OrigemCargaEnumLabel = new Map<OrigemCargaEnum, string>([
  [OrigemCargaEnum.Nacional, 'Nacional'],
  [OrigemCargaEnum.Importada, 'Importada']
]);