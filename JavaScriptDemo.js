function car(){
	this.firstInput = element(by.model("first"));
	this.secondInput = element(by.model("second"));
	this.goButton = element(by.id("gobutton"));
	this.colour = "red";
	this.engine = "gasoline";
	this.brand = "Ford";
	
	this.getURL = function(){
		browser.get('https://juliemr.github.io/protractor-demo/');
	}
}


module.exports = new car();
//myCar.getModel();