export class EVehicle {
  public id: number;
  public name: string;
  public description: string;

  constructor(props: EVehicle){
    Object.assign(this, props);
  }
}
