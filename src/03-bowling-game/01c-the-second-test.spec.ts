// Remove test duplication
// new Game
// roll for loop

import { BowlingGame } from "./01c-bowling-game";

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

  it("handle gutter game", () => {
    rollMany(20, 0);
    expect(game.score()).toBe(0);
  });

  it("handle all ones", () => {
    rollMany(20, 1);
    expect(game.score()).toBe(20);
  });
});
