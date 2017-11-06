function BowlingGame() {
  this.the_score= 0
}
BowlingGame.prototype.bowl = function() {
  this.the_score += 1
}

BowlingGame.prototype.score= function() {
  return this.the_score;
}
