describe ('Actions demo',function(){  
	
	it('Handle Alerts on non-angular website',function(){
		browser.waitForAngularEnabled(false);
		browser.get('http://www.qaclickacademy.com/practice.php');
		element(by.id("confirmbtn")).click();
		browser.switchTo().alert().accept();

	});
});