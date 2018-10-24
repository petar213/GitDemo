describe ('chain locators demo',function(){  
	var obj = require ('./JavaScriptDemo.js');
	var using = require ('jasmine-data-provider')
	var data = require ('./data.js');
	
	function Add(a,b){
		obj.firstInput.sendKeys(a);
		obj.secondInput.sendKeys(b);
		obj.goButton.click();
		
	}
	
	  beforeEach(function() {
			obj.getURL();
		  });
	  
	  //data driven testing 
	  using(data.dataDriven, function (datas, desc) {
		  
	  
			   
			it('chain locators' + desc, function(){
		
				Add(datas.firstInput, datas.secondInput);
				
				element.all(by.repeater("result in memory")).count().then(function(text){
					
					console.log(text);
				});
				
				element.all(by.repeater("result in memory")).each(function(item){
					item.element(by.css("td:nth-child(3)")).getText().then(function(text){
						expect(text).toBe(datas.result);
						console.log(text);
					});
				
				});
			});
	  })
});