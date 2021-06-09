import {Request, Response } from 'express';
import { HttpRequest, HttpResponse } from '../../interfaces/httpInterface';
import { IController } from "../../interfaces/IController";

// desacoplamos express del proyecto
export const AdapterRoute = ( controller: IController ) => {
  return async (req: Request, res: Response): Promise<any> => {
    const httpRequest: HttpRequest = { body: req.body };

    const httpResponse: HttpResponse = await controller.handle(httpRequest);

    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};
