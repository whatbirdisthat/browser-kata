function BowlingGame() {
  this.bowlCount = 0
  this.bowls = []
}
BowlingGame.prototype.bowl = function(pins) {
  this.bowls[this.bowlCount] = pins
  this.bowlCount++
}

/*
let isStrike(bowls, i) {
  return bowls[i] == 10
}*/

let isSpare = function(bowls, i) {
  return bowls[i] + bowls[i+1] == 10
}
let spareBonus = function(bowls, i) {
  return 10 + bowls[i+2]
}
BowlingGame.prototype.score = function() {
  var theScore = 0
  var frameIndex = 0
  for (var i = 0; i < 10; i++) {
    if (isSpare(this.bowls, frameIndex)) {
      theScore += spareBonus(this.bowls, frameIndex)
      frameIndex+=2
    } else {
      theScore += this.bowls[frameIndex] + this.bowls[frameIndex+1]
      frameIndex+=2
    }
  }
  return theScore;
}


