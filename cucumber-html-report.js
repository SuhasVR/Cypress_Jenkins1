const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "./reports/cucumber-json/cucumber-htmlreport.html.json", // ** Path of .json file **//
  reportPath: "./reports/cucumber-htmlreport.html", 
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    browser: {
      name: "chrome"
    },
    platform: {
      name: "Windows",
      version: "10",
    },
  },
});