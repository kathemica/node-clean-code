
// adapter: intermediario entre el package y las clases en produccion
export interface IEmailValidator {
  isValid: (email: string) => boolean;
}
