import { Team } from "./MTeam";

describe('Team Class', () => {
  it('should get the position', () => {
    const team = new Team();

    const position = {
      name: 'goalkeeper',
      tShirt: 1,
      skills: [
        'Corre rápido',
        'Patea fuerte',
        'Buenos reflejos'
      ]
    };

    expect(team.position(position.name, position.tShirt, position.skills )).toEqual([position['name'], position['tShirt'], position['skills']]);
  });

  it('should get the soccer play position', () => {
    const team = new Team();

    const attackerPlayer = {
      name: 'goalkeeper'
    };

    expect(team.attacker(attackerPlayer['name'])).toEqual(attackerPlayer['name']);
  });
});
