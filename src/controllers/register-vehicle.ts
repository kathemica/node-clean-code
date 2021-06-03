import { HttpReponse, HttpRequest } from "../interfaces/httpInterface";

export class RegisterVehicle {
  handle(httpRequest: HttpRequest): HttpReponse {
    if (!httpRequest.body.name){
      return {
        statusCode: 400,
        body: new Error('Error in the: name')
      };
    }

    if (!httpRequest.body.model){
      return {
        statusCode: 400,
        body: new Error('Error in the: model')
      };
    }
  }
}
