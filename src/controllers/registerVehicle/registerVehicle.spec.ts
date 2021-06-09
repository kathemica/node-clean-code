import { MissingFormalParamenter } from "../../errors/MissingFormalParamenter";
import { RegisterVehicle } from "./registerVehicle";
import { HttpResponse } from "../../interfaces/httpInterface";
import { addAccountUseCaseDB } from "../../data/useCases/addAccountUseCase.db";
import { IController } from "../../interfaces/IController";
import { ModelVehicle } from "../../domain/models/ModelVehicle";
import { successHelper} from '../../helpers/HHttp';

describe('RegisterVehicle', () => {
  beforeAll(() => {
    const modelBodyData = {
      name: 'Renault',
      model: '12',
      year: '1980',
      color: 'green'
    };

    const httpRequestObj = {
      name: 'Renault',
      model: '12',
      year: '1980',
      color: 'green',
      add() {
        // return jest.fn().mockImplementationOnce(() => (jest.fn().mockResolvedValueOnce(successHelper({}))));
        return jest.fn(()=> Promise.resolve(modelBodyData).then().catch().finally());
        }
      };

    new RegisterVehicle(httpRequestObj).handle = jest.fn().mockResolvedValue([{
          "_id": "60c0410910096c346c0b6dc9",
          "name": "Name car",
          "model": "Model car",
          "year": "Year car",
          "color": "Color car",
          "__v": 0
      }]);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const makeSUT = () : RegisterVehicle => {
    return new RegisterVehicle(new addAccountUseCaseDB());
  };

   it('if it is OK must return 200 and Ok at body ', async () => {
    const sut = makeSUT();

    const spy = jest.spyOn(sut, 'handle');

    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(200);
    expect(httpResponse.body).toEqual('OK');
  });
  it('if doest not exists the name must return 400 ', async () => {
    const sut = makeSUT();
    const httpRequest = {
      body: {
        model: '12',
        year: '1980',
        color: 'green'
      }
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingFormalParamenter('name'));
  });

  it('if not exists the model does not exists return 400  ', async () => {
    const sut = makeSUT();
    const httpRequest = {
      body: {
        name: 'Renault',
        year: '1980',
        color: 'green'
      }
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingFormalParamenter('model'));
  });

  it('if not exists the year does not exists return 400 ', async () => {
    const sut = makeSUT();
    const httpRequest = {
      body: {
        name: 'Renault',
        model: '12',
        color: 'green'
      }
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingFormalParamenter('year'));
  });

  it('if not exists the color does not exists return 400 ', async () => {
    const sut = makeSUT();
    const httpRequest = {
      body: {
        name: 'Renault',
        model: '12',
        year: '1980'
      }
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingFormalParamenter('color'));
  });
});
