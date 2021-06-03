import { vehicleHelper } from "../helpers/vehicleModelHelper";

export class Vehicle{
  constructor(private readonly vehicle: vehicleHelper){ }

  get Name(): string{
    return this.vehicle.name;
  }

  get Model(): string{
    return this.vehicle.model;
  }

  get Year(): number{
    return this.vehicle.year;
  }

  get Price(): number{
    return this.vehicle.price;
  }

  get IsAvailable(): boolean{
    return this.vehicle.isAvailable;
  }

}
