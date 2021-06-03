export class VehicleModel{
  constructor(private readonly name: string, private readonly model: string, private readonly year: number){
    this.name = name;
    this.model = model;
    this.year = 1980;
  }

  get Name(): string{
    return this.name;
  }

  get Model(): string{
    return this.model;
  }

  get Year(): number{
    return this.year;
  }

}
