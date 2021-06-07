import { Bird, FlyingBirds } from "./MBird";

// liskov substitucion principle
describe('Bird: Liskov substitucion principle tests', () => {
  const birdObj = {
    name: 'Bird',
    age: 0,
    origin: 'Some place'
  };

  it('Superclass Bird test: should eat', () => {
    const bird = new Bird(birdObj);
    expect(bird.eat()).toEqual(birdObj.name);
  });

  it('Subclass FlyingBirds test: should fly', () => {
    const bird = new FlyingBirds(birdObj);
    expect(bird.fly()).toEqual(birdObj.name);
  });
});
