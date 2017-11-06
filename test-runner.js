function assertEquals(expected, actual) {
  if (actual !== expected) {
    throw {
      expected: expected,
      actual: actual
    }
  }
}

function runTests(theTests) {

  let startTime = new Date()

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
    document.write("<pre>" + testResult + " - " + testName + "</pre>")
    failReport && document.write("<pre>" + failReport + "</pre>")

  }
  let theDuration = new Date() - startTime
  console.log(theDuration + "s DURATION")
  document.write("<br><pre>" + theDuration + "s </pre>")
}
