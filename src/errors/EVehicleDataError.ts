export class VehicleDataError extends Error{
  constructor(public name: string){
    super(name);
  }
}
