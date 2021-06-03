import { VehicleModelHelper } from "./vehicleModelHelper";

describe('Helpers', () => {
  it('Class vehicleModel: expect to have correct field types', () => {
    let vehicleModelHelper = new VehicleModelHelper;

    vehicleModelHelper = {
      name: 'Renault',
      model: '12',
      year: 1980,
      price: 45000.98,
      isAvailable: true,
      color: 'green'
    };

    expect(typeof vehicleModelHelper.name).toEqual('string');
    expect(typeof vehicleModelHelper.model).toBe('string');
    expect(typeof vehicleModelHelper.year).toBe('number');
    expect(typeof vehicleModelHelper.price).toBe('number');
    expect(typeof vehicleModelHelper.isAvailable).toBe('boolean');
    expect(typeof vehicleModelHelper.color).toBe('string');
  });
});
