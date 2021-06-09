import { RegisterVehicle } from "../../controllers/registerVehicle/registerVehicle";
import { addAccountUseCaseDB } from "../../data/useCases/addAccountUseCase.db";

// inyeccion de dependencias
export const makeRegisterVehicleController = (): RegisterVehicle => {
  const dbAddAccountUseCase = new addAccountUseCaseDB();
  const registerVehicle = new RegisterVehicle(dbAddAccountUseCase);

  return registerVehicle;
};
