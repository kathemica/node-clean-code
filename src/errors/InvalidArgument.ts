export class InvalidArgument extends Error{
  constructor(public name: string){
    super(name);
  }
}
