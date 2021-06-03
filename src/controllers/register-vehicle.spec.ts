import { RegisterVehicle } from "./register-vehicle";

describe('RegisterVehicle', () => {
  it('if the name does not exists return 400 ', () => {
    const sut = new RegisterVehicle();
    const httpRequest = {
      body: {
        // name: 'Renault',
        model: '12',
        yeay: '1980',
      }
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error('Error in the: name'));
  });

  it('if the model does not exists return 400 ', () => {
    const sut = new RegisterVehicle();
    const httpRequest = {
      body: {
        name: 'Renault',
        // model: '12',
        yeay: '1980',
      }
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error('Error in the: model'));
  });

});
