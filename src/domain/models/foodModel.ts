import { FoodModelHelper } from "../../helpers/foodModelHelper";

export class Food {

  constructor(private food: FoodModelHelper){
  }

  get Name (): string{
    return this.food.name;
  }

  get Description (): string{
    return this.food.description;
  }

  get Price (): number{
    return this.food.price;
  }

  // manera de devolver todo el objeto
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get WholeFood (): any{
    return Object.assign(this, this.food);
  }

}
