import { ServerError } from "../errors/ServerError";
import { HttpResponse } from "../interfaces/httpInterface";

export const serverErrorHelper = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack)
});

export const successHelper = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
});

export const badRequestHelper = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
});
