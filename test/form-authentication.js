var webdriver = require("selenium-webdriver");
var expect = require('chai').expect;

//Timer
var waitTime = 30000;

//Real time web launcher
var driver = new webdriver.Builder().forBrowser("chrome").build();
const url =	"http://the-internet.herokuapp.com/login";

formAuthentication();

	function formAuthentication() {
		//log enter site & log in
		driver.get(url);
		driver.wait(webdriver.until.elementIsVisible(webdriver.By.xpath('//*[@id="login"]/button')), waitTime);
		var element = driver.findElement(webdriver.By.id('username'));
		element.sendKeys('tomsmith');

		var element = driver.findElement(webdriver.By.id('password'));
		element.sendKeys('SuperSecretPassword!');		

		var element = driver.findElement(webdriver.By.className('fa fa-2x fa-sign-in'));
		element.submit(); 	
		// make sure the right element is available, then log out
			var results = driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('//*[@id="content"]/div/a/i')), waitTime);
			results.click();
		
	}