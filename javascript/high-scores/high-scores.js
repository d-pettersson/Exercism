export class HighScores {
  constructor(scores) {
    this.scores = scores;
  }

  get latest() {
    return parseInt(this.scores.slice(this.scores.length - 1, this.scores.length));
  }

  get highest() {
    return Math.max(...this.scores);
  }

  get top() {
    return this.scores.concat().sort((a, b) => b - a).slice(0, 3);
  }

  get report() {
    return this.latest === this.highest ? `Your latest score was ${this.latest}. That's your personal best!` : `Your latest score was ${this.latest}. That's ${this.highest - this.latest} short of your personal best!`;
  }
}
