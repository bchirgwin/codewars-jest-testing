export class BowlingGame {
  _score = 0;

  roll(pins) {
    this._score += pins;
  }

  score() {
    return this._score;
  }
}
