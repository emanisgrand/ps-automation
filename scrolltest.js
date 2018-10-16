var webdriver = require("selenium-webdriver");
var expect = require("chai").expect;

var driver = new webdriver.Builder().forBrowser("chrome").build();
const url =	"http://the-internet.herokuapp.com/infinite_scroll";
	

	driver.get(url);
	var i = -1;
	function infiniteScroll() { 
	setTimeout(function() { 		
				driver.wait(webdriver.until.elementLocated(webdriver.By.className('jscroll-added')));	
				driver.findElement(webdriver.By.className('no-js')).sendKeys(webdriver.Key.END);
				i++;
				if (i <= 3) {
					infiniteScroll();
				}
			}, 1000)
		}

infiniteScroll();		
