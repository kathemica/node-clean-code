import { EVehicle } from "../entities/EVehicle";

export interface IVehicleRepository {
  findById(id: number): Promise<EVehicle>;
  save(vehicle: EVehicle): Promise<void>;
}
