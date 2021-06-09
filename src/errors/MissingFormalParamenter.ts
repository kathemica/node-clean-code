export class MissingFormalParamenter extends Error{
  constructor(public name: string){
    super(`error in param: ${name}`);
    this.name = `error in param: ${name}`;
  }
}
