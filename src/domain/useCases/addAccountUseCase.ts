import { ModelVehicle } from "../models/ModelVehicle";

export interface AddAccountVehicle {
  name: string;
  model: string;
  year: string;
  color: string;
  email: string;
}

export interface AddAccount {
  add: (vehicle: AddAccountVehicle) => Promise<ModelVehicle>;
}
