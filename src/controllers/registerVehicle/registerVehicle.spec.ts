import { MissingFormalParamenter } from "../../errors/MissingFormalParamenter";
import { RegisterVehicle } from "./registerVehicle";

describe('RegisterVehicle', () => {
  it('if it is OK must return 200 and Ok at body ', () => {
    const sut = new RegisterVehicle();
    const httpRequest = {
      body: {
        name: 'Renault',
        model: '12',
        year: '1980',
        color: 'green'
      }
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(200);
    expect(httpResponse.body).toEqual('OK');
  });
  it('if doest not exists the name must return 400 ', () => {
    const sut = new RegisterVehicle();
    const httpRequest = {
      body: {
        model: '12',
        year: '1980',
        color: 'green'
      }
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingFormalParamenter('name'));
  });

  it('if not exists the model does not exists return 400  ', () => {
    const sut = new RegisterVehicle();
    const httpRequest = {
      body: {
        name: 'Renault',
        year: '1980',
        color: 'green'
      }
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingFormalParamenter('model'));
  });

  it('if not exists the year does not exists return 400 ', () => {
    const sut = new RegisterVehicle();
    const httpRequest = {
      body: {
        name: 'Renault',
        model: '12',
        color: 'green'
      }
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingFormalParamenter('year'));
  });

  it('if not exists the color does not exists return 400 ', () => {
    const sut = new RegisterVehicle();
    const httpRequest = {
      body: {
        name: 'Renault',
        model: '12',
        year: '1980'
      }
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingFormalParamenter('color'));
  });
});
