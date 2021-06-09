import { HttpRequest, HttpResponse } from "./httpInterface";

//sino implementa el método handle no se va a adapter el controller a la interface
export interface IController {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>;
}
