import { EVehicle } from "../entities/EVehicle";
import { VehicleDataError } from "../../errors/EVehicleDataError";
import { IVehicleRepository } from "../repository/IVehicle";
import { CreateVehicleDTO } from "./CreateVehicleDTO";

export class CreateVehicle {
  constructor(private vehicleRepository: IVehicleRepository){}

  async execute(data: CreateVehicleDTO): Promise<void>{
    const vehicleExists = await this.vehicleRepository.findById(data.id);

    if (vehicleExists) {
      throw new VehicleDataError('Vehicle exists in data base');
    }

    const vehicle = new EVehicle(data);

    await this.vehicleRepository.save(vehicle);
  }
}
