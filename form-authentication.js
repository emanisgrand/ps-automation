var webdriver = require("selenium-webdriver");
var expect = require('chai').expect;

//Timer
var waitTime = 30000;

//Real time web launcher
var driver = new webdriver.Builder().forBrowser("chrome").build();

	describe("Form Authentication", function() {
		
		it("Successfully log in ", function(){
		driver.get('http://the-internet.herokuapp.com/login');

		var element = driver.findElement(webdriver.By.id('username'));
		element.sendKeys('tomsmith');

		var element = driver.findElement(webdriver.By.id('password'));
		element.sendKeys('SuperSecretPassword!');		

		var element = driver.findElement(webdriver.By.className('fa fa-2x fa-sign-in'));
		element.submit(); 	
	 	});
	

		it("Wait a sec, then log out", function() {
			var results = driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('//*[@id="content"]/div/a/i')), waitTime);
			results.click();
		});
	});