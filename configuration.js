var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
	    browserName: 'chrome'
	  },
  specs: ['dropDowns.js'],
  
	  onPrepare : function (){
		  
		  jasmine.getEnv().addReporter(
			        new Jasmine2HtmlReporter({
			          savePath: 'target/screenshots'
			        })
			      );
	  },
	  
  suites :{
	  smoke : 'Practise.js'
	  
  },
	  
  jasmineNodeOpts: {
		showColors: true, // Use colors in the command line report.
	  }
  
  
};