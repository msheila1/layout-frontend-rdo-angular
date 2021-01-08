export class Messages {
  type: MessagesType;
  message: string;
}

export enum MessagesType {
  Success,
  Error,
  Info,
  Warning
}