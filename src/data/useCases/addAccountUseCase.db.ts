import vehicleService from "../../domain/services/vehicleService";
import { AddAccount, AddAccountVehicle } from "../../domain/useCases/addAccountUseCase";

// para agregar a la base de datos
export class addAccountUseCaseDB implements AddAccount {

  async add(vehicle: AddAccountVehicle): Promise<AddAccountVehicle> {
    const vehicleDB: any = await vehicleService.create(vehicle);

    return new Promise(resolve => resolve(
      vehicleDB
    ));
  }
}
