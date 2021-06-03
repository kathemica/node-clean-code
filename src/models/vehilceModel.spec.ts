import { Vehicle } from "./vehicleModel";

describe('Models', () => {
  it('Class Vehicle ', () => {
    const vehicleModel = new Vehicle('Renault', '12', 1980);
    expect(vehicleModel.Name).toEqual('Renault');
    expect(vehicleModel.Model).toEqual('12');
    expect(vehicleModel.Year).toEqual(1980);
  });
});
