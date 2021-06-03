import { FoodModelHelper } from "./foodModelHelper";

describe('Helpers', () => {
  it('Class FoodModel: expect to have correct field types', () => {
    let foodModelHelper= new FoodModelHelper;

    foodModelHelper = {
      name: 'Ketchup',
      description: 'Salsa a base de tomates',
      price: 55.20
    };

    expect(typeof foodModelHelper.name).toEqual('string');
    expect(typeof foodModelHelper.description).toBe('string');
    expect(typeof foodModelHelper.price).toBe('number');
  });
});
