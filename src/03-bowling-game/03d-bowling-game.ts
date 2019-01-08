export class BowlingGame {
  rolls: number[];
  currentRoll = 0;

  constructor() {
    this.rolls = new Array(21).fill(0);
  }

  roll(pins) {
    this.rolls[this.currentRoll++] = pins;
  }

  score() {
    let score = 0;
    let frameIndex = 0;
    for (let frame = 0; frame < 10; frame++)  {
      if (this.isStrike(frameIndex)) {
        score += 10 + this.strikeBonus(frameIndex);
        frameIndex++
      } else if (this.isSpare(frameIndex)) {
        // spare
        score += 10 + this.spareBonus(frameIndex);
        frameIndex += 2;
      } else {
        score += this.sumOfBallsInFrame(frameIndex);
        frameIndex += 2;
      }
    }
    return score;
  }

  isStrike(frameIndex) {
    return this.rolls[frameIndex] === 10
  }

  isSpare(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex+1] === 10
  }

  strikeBonus (frameIndex) {
    return this.rolls[frameIndex+1] + this.rolls[frameIndex+2]
  }

  spareBonus(frameIndex) {
    return this.rolls[frameIndex+2]
  }

  sumOfBallsInFrame(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1]
  }

}
