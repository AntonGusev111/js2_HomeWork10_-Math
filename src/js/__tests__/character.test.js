import Character from '../character.js';

test('char atack test', () => {
    const char = new Character();
    char.attack = 50;

  expect(char.attack).toBe(45);
});

test ('char stoned test', () => {
    const char = new Character();
    char.attack = 50;
    char.stoned = 3;
  expect(char.stoned).toBe(47);
});

