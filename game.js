
Object.prototype.BowlingGame = function() {
  return {
    _score: 0,
    bowl: function() {
      this._score += 1
    },
    score: function() {
      return this._score;
    }
  }
}
