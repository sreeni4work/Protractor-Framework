//HTMl report by Jasmine2 only failed test cases
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var HtmlReporter = require('protractor-beautiful-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html',
  captureOnlyFailedSpecs: false
});

var reporter = new HtmlReporter({
  baseDirectory: 'tmp/screenshots'
});

// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../tests/calculator.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  // Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },

  // Assign the test reporter to each running instance
  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
  },

  // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },
  onPrepare: function() {
    //HTML report -xml
    /*var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: './',
      filePrefix: 'xmlresults'
    }));*/
    //Allure Report
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
    
  },
<<<<<<< HEAD
=======

>>>>>>> 4d8b5396e9b459525a3b69f63b6a876878eaee0c
  onPrepare: function() {
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
       baseDirectory: 'tmp/screenshots'
    }).getJasmine2Reporter());
 }
  //HTML Report
       /*
  onComplete: function() {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
       browserName = caps.get('browserName');
       browserVersion = caps.get('version');
       platform = caps.get('platform');

       var HTMLReport = require('protractor-html-reporter-2');

       testConfig = {
           reportTitle: 'Protractor Test Execution Report',
           outputPath: './',
           outputFilename: 'ProtractorTestReport',
           screenshotPath: './screenshots',
           testBrowser: browserName,
           browserVersion: browserVersion,
           modifiedSuiteName: false,
           screenshotsOnlyOnFailure: true,
           testPlatform: platform
       };
       new HTMLReport().from('xmlresults.xml', testConfig);
   });*/

};
