import { MissingFormalParamenter } from "../../errors/MissingFormalParamenter";
import { serverErrorHelper, successHelper, badRequestHelper } from '../../helpers/HHttp';
import { IController } from "../../interfaces/IController";
import { HttpResponse, HttpRequest } from "../../interfaces/httpInterface";
import { AddAccount } from "../../domain/useCases/addAccountUseCase";

export class RegisterVehicle implements IController {

  constructor(private readonly addAccount: AddAccount){
    this.addAccount = addAccount;
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredProperties = ['name', 'model', 'year', 'color', 'email'];

      for (const property of requiredProperties) {
        if (!httpRequest.body[property]){
          return badRequestHelper(new MissingFormalParamenter(property));
        }
      }
      const { name, model, year, color, email } = httpRequest.body;

      const vehicle = await this.addAccount.add({
        name, model, year, color, email
      });

      return successHelper(vehicle);
    } catch (error) {
      serverErrorHelper(error);
    }
  }
}
