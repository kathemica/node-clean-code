import { Vehicle } from "./vehicleModel";

describe('Models', () => {
  it('Class Vehicle ', () => {
    const vehicleObj= {
      name: 'Renault',
      model: '12',
      year: 1980,
      price: 45000.98,
      isAvailable: true
    };

    const vehicleModel = new Vehicle(vehicleObj);
    expect(vehicleModel.Name).toEqual('Renault');
    expect(vehicleModel.Model).toEqual('12');
    expect(vehicleModel.Year).toEqual(1980);
    expect(vehicleModel.Price).toEqual(45000.98);
    expect(vehicleModel.IsAvailable).toEqual(true);
  });
});
