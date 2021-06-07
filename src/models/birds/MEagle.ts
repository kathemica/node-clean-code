import { FlyingBirds } from "./MBird";

export class Eagle extends FlyingBirds {
  fly (): string {
    return this.iBird.name;
  }
}
