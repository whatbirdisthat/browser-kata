
let tests = {

  ZeroPinsGameScoreIsZero: function(game) {
    assertEquals(0, game.score());
  },

  SinglePinGameScoreIsOne: function (game) {
    game.bowl(1);
    assertEquals(1, game.score());
  },

  AllOnesGameScoreIsNineteen: function (game) {
    for (var i = 0; i < 19; i++) {
      game.bowl(1);
    }
    assertEquals(19, game.score());
  },

  CanReportASpare: function(game) {
    game.bowl(6)
    game.bowl(4)
    game.bowl(3)
    assertEquals(16, game.score())
  },

  /*CanReportASpareWithOverlappingSums: function(game) {
    game.bowl(7)
    game.bowl(3)
    game.bowl(7)
    assertEquals(16, game.score())
  }*/

}

runTests(tests)
