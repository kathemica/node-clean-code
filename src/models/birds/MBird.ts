import { IBird } from "../../interfaces/IBird";

export class Bird {
  constructor(public iBird: IBird){
    Object.assign(this, iBird);
  }

  eat () : string {
    return this.iBird.name;
  }
}

export class FlyingBirds extends Bird {
  fly (): string {
    return this.iBird.name;
  }
}

