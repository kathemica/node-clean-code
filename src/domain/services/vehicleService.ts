import { ModelVehicle } from "../models/ModelVehicle";
import vehicleRepository from "../repositories/vehicleRepository";

export class vehicle {
  async create(vehicle: ModelVehicle ){
    return vehicleRepository.create(vehicle);
  }
}

export default new vehicle();
