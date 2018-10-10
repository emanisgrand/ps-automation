var webdriver = require("selenium-webdriver");
var expect = require("chai").expect;

var driver = new webdriver.Builder().forBrowser("chrome").build();
const url =	"http://the-internet.herokuapp.com/infinite_scroll";
	

	driver.get(url);

	function infiniteScroll(num) { 		
		for (var i = 0; i < num; i++) {
				// driver.wait(webdriver.until.elementLocated(webdriver.By.className('no-js')));	
				driver.findElement(webdriver.By.className('no-js')).sendKeys(webdriver.Key.END);
		
				}
			}

infiniteScroll(3);	