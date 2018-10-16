var webdriver = require("selenium-webdriver");
var mocha = require("mocha");

var driver = new webdriver.Builder().forBrowser("chrome").build();
const url =	"http://the-internet.herokuapp.com/checkboxes";
driver.get(url);

  
	
	checkbox1 = driver.findElement(webdriver.By.css('#checkboxes > input[type="checkbox"]:nth-child(1)'));
	checkbox2 = driver.findElement(webdriver.By.css('#checkboxes > input[type="checkbox"]:nth-child(3)'));

	var myArray = [checkbox1, checkbox2];

	
	for (var i=0; i<myArray.length;i++){
		myArray[i].click(); 
		}	
