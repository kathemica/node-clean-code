import { Bird } from "./MBird";

export class Penguin extends Bird {
  walk (): string {
    return 'I can walk';
  }

  swin (): string {
    return 'I can swin';
  }
}
