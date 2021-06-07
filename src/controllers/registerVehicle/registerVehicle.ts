import { MissingFormalParamenter } from "../../errors/MissingFormalParamenter";
import { HttpResponse, HttpRequest } from "../../interfaces/httpInterface";

export class RegisterVehicle {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredProperties = ['name', 'model', 'year', 'color'];

    for (const property of requiredProperties) {
      if (!httpRequest.body[property]){
        return {
          statusCode: 400,
          body: new MissingFormalParamenter(property)
        };
      }
    }
    return {
      statusCode: 200,
      body: 'OK'
    };
  }
}
