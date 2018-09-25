describe('Test Suite Name', function(){

	it('Test Case Name', function(){

		browser.get("http://juliemr.github.io/protractor-demo/");


		element(by.model("first")).sendKeys("5");
		browser.sleep(3000);

		element(by.model("second")).sendKeys("4");
		browser.sleep(3000);


		element(by.id("gobutton")).click();
		browser.sleep(6000);
		
	});
});