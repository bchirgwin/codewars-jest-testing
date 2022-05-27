import { BowlingGame } from "./03e-bowling-game";

describe("BowlingGame", () => {
  let game;
  beforeEach(() => {
    game = new BowlingGame();
  });

  const rollMany = (rolls, pins) => {
    for (let i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };

  const rollSpare = () => {
    game.roll(5);
    game.roll(5);
  };

  const rollStrike = () => {
    game.roll(10);
  };

  it("handle gutter game", () => {
    rollMany(20, 0);
    expect(game.score()).toBe(0);
  });

  it("handle all ones", () => {
    rollMany(20, 1);
    expect(game.score()).toBe(20);
  });

  it('handle one spare', () => {
    rollSpare();
    game.roll(3);
    rollMany(17, 0);

    expect(game.score()).toBe(16);
  });

  it('should handle one strike', () => {
    rollStrike();
    game.roll(3);
    game.roll(4);
    rollMany(16, 0);
    expect(game.score()).toBe(24);
  })

});
