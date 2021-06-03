export class Food {
  private readonly name: string;
  private readonly description: string;
  private price: number;

  constructor(name: string, description: string, price: number){
    this.name= name;
    this.description= description;
    this.price= price;
  }

  get Name (): string{
    return this.name;
  }

  get Description (): string{
    return this.description;
  }

  get Price (): number{
    return this.price;
  }

}
