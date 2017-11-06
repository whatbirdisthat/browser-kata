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
  var passCount = 0
  var failCount = 0

  document.write("<pre>")

  for (var i in theTests) {
    let testName = i
    var testResult = "\u2713"
    var testResultHTML = "<font color=\"green\">" + testResult + "</font>"

    var failReport = null
    try {
      let theGame = new BowlingGame();
      theTests[i](theGame);
      passCount++
    } catch (e) {
      testResult = "\u2717"
      testResultHTML = "<font color=\"red\">" + testResult + "</font>"
      failReport = e
      failCount++
    }
    console.log(testResult + " - " + testName)
    failReport && console.table(failReport)


    document.write("\n" + testResultHTML + " - " + testName)
    failReport && document.write(JSON.stringify(failReport))

  }

  let theDuration = new Date() - startTime
  let summaryMessage = passCount + " passed, " + failCount + " failed in " + theDuration + "s"
  document.write("</pre>")
  console.log(summaryMessage)
  document.write("<br><pre>" + summaryMessage + "</pre>")
}
