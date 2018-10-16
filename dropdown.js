var webdriver = require("selenium-webdriver");
var expect = require("chai").expect;
var assert = require("assert");

var driver = new webdriver.Builder().forBrowser("chrome").build();
const url =	"http://the-internet.herokuapp.com/dropdown";

	driver.get(url);


	chooseAtRandom();
	function chooseAtRandom() {
	option1 = driver.findElement(webdriver.By.css('#dropdown > option:nth-child(2)'));
	option2 = driver.findElement(webdriver.By.xpath('//*[@id="dropdown"]/option[3]'));

	var myArray = [option1, option2];

	var rand = myArray [Math.floor(Math.random() * myArray.length)];

	rand.click();
	}

//    ***** FAILED ATTEMPTS *******

// driver.findElements(By.css('css selector', '#drop_ddl option', function(result) {
//         return result.value.length;
//     })	
	// dropdown.selected.value(2);
	
//     setSelectedValue(dropdown, "1");
// setSelectedValue(dropdown, "Option 2");
//     function setSelectedValue(selectObj, valueToSet) {
//     for (var i = 0; i < selectObj.length; i++) {
//         if (selectObj.options[i].text== valueToSet) {
//         	dropdown.click();
//             selectObj.options[i].selected = true;
//             return;
//         }
//     }
// }

//    var ddList = driver.findElements(webdriver.By.tagName('option'));
	// driver.findElements(webdriver.By.xpath('//*[@id="dropdown"]/option[2]//*[@id="dropdown"]/option[3]'));
// SelectElement();