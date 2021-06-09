import mongoose from 'mongoose';
import vehicleSchema from '../models/ModelVehicle';

export default mongoose.model('vehicle', vehicleSchema);
