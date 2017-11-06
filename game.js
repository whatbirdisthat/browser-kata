function BowlingGame() {
  this.bowlCount = 0
  this.bowls = []
}
BowlingGame.prototype.bowl = function(pins) {
  this.bowls[this.bowlCount] = pins
  this.bowlCount++
}

BowlingGame.prototype.score = function() {
  var theScore = 0
  for (var i = 0; i < this.bowlCount; i++) {
    if (i > 0 && (this.bowls[i] + this.bowls[i-1] === 10)) {
      theScore += (this.bowls[i] + this.bowls[i+1])
    } else {
      theScore += this.bowls[i]
    }
  }
  return theScore;
}
