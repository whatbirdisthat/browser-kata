function assertEquals(expected, actual) {
  if (actual !== expected) {
    throw {
      expected: expected,
      actual: actual
    }
  }
}

function runTests(theTests) {
  for (var i in theTests) {
    let testName = i
    var testResult = "\u2713"
    var failReport = null
    try {
      let theGame = new BowlingGame();
      theTests[i](theGame);
    } catch (e) {
      testResult = "\u2717"
      failReport = {...{testName:testName},...e}
    }
    console.log(testResult + " - " + testName)
    failReport && console.table(failReport)
  }
}
