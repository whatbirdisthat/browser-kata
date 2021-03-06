let bowlMany = function(game, bowls, pins) {
  for (var i = 0; i < bowls; i++) {
    game.bowl(pins)
  }
}

let tests = {

  CanReportGutterGameAsZero: function (game) {
    bowlMany(game, 20, 0);
    assertEquals(0, game.score())
  },

  AllOnesGameScoreIsNineteen: function (game) {
    for (var i = 0; i < 20; i++) {
      game.bowl(1)
    }
    assertEquals(20, game.score())
  },

  CanReportASpare: function(game) {
    game.bowl(6)
    game.bowl(4)
    game.bowl(3)
    bowlMany(game, 17, 0)
    assertEquals(16, game.score())
  },

  CanReportASpareWithOverlappingSums: function(game) {
    game.bowl(7)
    game.bowl(3)
    game.bowl(7)
    bowlMany(game, 17, 0)
    assertEquals(24, game.score())
  },

  CanReportAGameWithAStrike: function(game) {
    game.bowl(0);
    game.bowl(1);
    game.bowl(10);
    game.bowl(1);
    game.bowl(1);
    bowlMany(game, 14, 0)
    assertEquals(15, game.score())
  },

  CanReportAPerfectGame: function(game) {
    bowlMany(game, 21, 10)
    assertEquals(300, game.score())
  }

}

runTests(tests)
