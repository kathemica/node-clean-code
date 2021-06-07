// principio de segregacion de interfaces: crear los metodos que necesita la clase en interfaces y luego implementarlas
import { ITeam, ISoccerPlay } from "../../interfaces/ITeam";

export class Team implements ITeam, ISoccerPlay {
  position(name: string, tShirt: number, skills: string[]): unknown[] {
    return [
      name,
      tShirt,
      skills
    ];
  }

  attacker(name: string): unknown {
    return name;
  }
}
