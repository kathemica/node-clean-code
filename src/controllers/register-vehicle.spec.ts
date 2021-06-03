import { RegisterVehicle } from "./register-vehicle";

describe('RegisterVehicle', () => {
  it('if not exists the name does not exists return 400 ', () => {
    const sut = new RegisterVehicle();
    const httpRequest = {
      body: {
        // name: 'Renault',
        model: '12',
        year: '1980',
      }
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error('Error in the: name'));
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
    expect(httpResponse.body).toEqual(new Error('Error in the: model'));
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
    expect(httpResponse.body).toEqual(new Error('Error in the: year'));
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
    expect(httpResponse.body).toEqual(new Error('Error in the: color'));
  });
});
