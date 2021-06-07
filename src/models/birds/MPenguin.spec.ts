import { Penguin } from "./MPenguin";

// liskov substitucion principle
describe('Penguin: Liskov substitucion principle test for instanciated class', () => {
  const birdObj = {
    name: 'Penguin',
    age: 30,
    origin: 'Nort America'
  };
  it('Penguin test: should swin', () => {
    const penguin = new Penguin(birdObj);
    expect(penguin.walk()).toEqual('I can walk');
  });

  it('Penguin test: should swin', () => {
    const penguin = new Penguin(birdObj);
    expect(penguin.swin()).toEqual('I can swin');
  });

  it('Penguin test: should not fly', () => {
    const penguin = new Penguin(birdObj);

    expect('fly' in penguin).toBe(false);
  });
});
