import { VehicleModel } from "./vehicleModel";

describe('Classes', () => {
  it('Class VehicleModel ', () => {
    const vehicleModel = new VehicleModel('Renault', '12', 1980);
    expect(vehicleModel.Name).toEqual('Renault');
    expect(vehicleModel.Model).toEqual('12');
    expect(vehicleModel.Year).toEqual(1980);
  });
});
