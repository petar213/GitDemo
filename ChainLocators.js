describe ('chain locators demo',function(){  
	
	it('chain locators',function(){
		browser.get('https://juliemr.github.io/protractor-demo/');
		element(by.model("first")).sendKeys("3 ");
		element(by.model("second")).sendKeys("3 ");
		element(by.id("gobutton")).click();
		element(by.repeater("result in memory")).element(by.css("td:nth-child(1)")).getText().then(function(text){
			
			console.log(text);
		});
		
	});
});