import { HttpResponse, HttpRequest } from "../interfaces/httpInterface";

export class RegisterVehicle {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredProperties = ['name', 'model', 'year', 'color'];

    requiredProperties.forEach(property => {
      if (!httpRequest.body[property]){
        return {
          statusCode: 400,
          body: new Error(`Error in the: ${property}`)
        };
      }
    });
    return {
      statusCode: 200,
      body: { httpRequest}
    };
  }
}
