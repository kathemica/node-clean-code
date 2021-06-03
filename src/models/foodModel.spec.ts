import { Food } from "./foodModel";

describe('Models', () => {
  it('Class Food: should return properly values ', () => {
    const food = new Food('Ketchup', 'Salsa a base de tomates', 55.20 );

    expect(food.Name).toEqual('Ketchup');
    expect(food.Description).toEqual('Salsa a base de tomates');
    expect(food.Price).toEqual(55.20);
  });
});
