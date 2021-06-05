export class MissingFormalParamenter extends Error{
  constructor(public name: string){
    super(`error in param: ${name}`);
  }
}
