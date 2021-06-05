import { InvalidArgument } from "../errors/invalidArg";
import { URlLogin } from "./protocolHttp";

describe('Protocols and Query', () => {

  it('Login valid URL', () => {
    const parsedURL = URlLogin.parseURL('http://localhost:3000/login');

    expect(parsedURL.href).toBe('http://localhost:3000/login');
    expect(parsedURL.port).toBe('3000');
  });

  it('Login response query', () => {
    const parsedURL = URlLogin.parseURL('http://localhost:3000/login?user=user&password=password');

    const expectedAuth = {
      'user': 'user',
      'password': 'password'
    };

    // Object.fromEntries convierte un map object en un JSON
    const parsedURLQuery = Object.fromEntries(new URLSearchParams(parsedURL.search));

    expect(parsedURLQuery).toEqual(expectedAuth);
  });

  it('User invalid URL', () => {
    const expectError = (): void =>{
      URlLogin.parseURL('');
    };

    expect(expectError).toThrowError(new InvalidArgument('Invalid URL'));
  });
});
