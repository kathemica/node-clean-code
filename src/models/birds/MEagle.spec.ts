import { Eagle } from "./MEagle";

// liskov substitucion principle
describe('Eagle: Liskov substitucion principle test for instanciated class', () => {
  const birdObj = {
    name: 'Eagle',
    age: 30,
    origin: 'Nort America'
  };
  it('Eagle test: should fly', () => {
    const eagle = new Eagle(birdObj);
    expect(eagle.fly()).toEqual(birdObj.name);
  });

  it('Eagle test: should not swin', () => {
    const eagle = new Eagle(birdObj);

    expect('swin' in eagle).toBe(false);
  });
});
