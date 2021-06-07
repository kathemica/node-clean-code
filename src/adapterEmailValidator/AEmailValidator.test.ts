import validator from 'validator';

import { EmailValidatorAdapter } from "./AEmailValidator";

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true;
  }
}));

const makeSUT = () : EmailValidatorAdapter => {
  return new EmailValidatorAdapter();
};
describe('Email Validator', () => {
  it('Should return false validator', () => {
    const sut = makeSUT();
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false);
    const isValid = sut.isValid('email@email.com');
    expect(isValid).toBe(false);
  });

  it('should return a true validation', () => {
    const systemUnderTest = makeSUT();
    const isValid = systemUnderTest.isValid('email@email.com');
    expect(isValid).toBe(true);
  });

  it('Should return format correct email of the validator', () => {
    const sut = makeSUT();
    const isValidSpyOn = jest.spyOn(validator, 'isEmail');
    sut.isValid('email@email.com');
    expect(isValidSpyOn).toHaveBeenCalledWith('email@email.com');
  });
});
