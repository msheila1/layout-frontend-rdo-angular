import { InjectionToken } from '@angular/core';

export const defaultErrors = {
    required: (error) => `Este campo é obrigatório`,
    minlength: ({ requiredLength, actualLength }) => `O tamanho mínimo é ${requiredLength}`,
    maxlength: ({ requiredLength, actualLength }) => `O tamanho máximo é ${requiredLength}`,
    min: ({ min, actual }) => `O valor mínimo é ${min}`,
    max: ({ max, actual }) => `O valor máximo é ${max}`,


    formatoNovaSenha: (error) => `A senha deverá ter entre 6 a 10 caracteres e possuir caracteres especiais`,
    formatoSenhaAtual: (error) => `A senha atual não pode ser igual a senha anterior`,
    formatoConfirmaSenha: (error) => `Nova Senha” e “Confirmar Senha” não são iguais`,
}

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors
});