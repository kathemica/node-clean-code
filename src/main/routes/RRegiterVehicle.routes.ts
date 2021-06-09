import { Router} from 'express';
import { AdapterRoute } from '../adapters/AExpress';
import { makeRegisterVehicleController } from '../factories/vehicleFactorie';

export default ( router: Router): void => {
  router.post('/register-vehicle', AdapterRoute(makeRegisterVehicleController()));
};
