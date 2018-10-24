describe ('Actions demo',function(){  
	
	it('Open posse site',function(){
		browser.get('https://posse.com/');
		element(by.model("userInputQuery")).sendKeys("river");
		browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("London")).perform();
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
			browser.sleep(5000);
			expect(element.all(by.css("div[ng-mouseover*='onSearchResultO']")).count()).toEqual(7);
			element.all(by.css("div[ng-mouseover*='onSearchResultO']")).get(0).click();
			element(by.css("a[ng-href='/place/GB/London/River Island']")).click().then(function(){
				browser.getTitle().then(function(title){
					console.log(title+"this is the old tittle");
					})
				
				
				})
			
			
			
			
			browser.getAllWindowHandles().then(function(handles){
				browser.switchTo().window(handles[1]);
				browser.getTitle().then(function(title){
					console.log(title+"this is the new tittle");
						})
				
					})
				})
	});
});