var webdriver = require("selenium-webdriver");
var expect = require("chai").expect;

var driver = new webdriver.Builder().forBrowser("chrome").build();
const url =	"http://the-internet.herokuapp.com/tables";



describe("Sort", function() {
	it('Click table element to reorganize data', function() {
	driver.get(url);
	var email = driver.findElement(webdriver.By.xpath('//*[@id="table1"]/thead/tr/th[3]/span'));	
	email.click();
	});
});

describe("Data out", function() {   
	it('Verify output is reading the table', function()  { 
	var tableCells = driver.findElements(webdriver.By.xpath("//*[@id='table1']"));

	tableCells.then(function (elements) {

	console.log("Tables read equals -> " + elements.length+ "\n");

			//Print data from each cell
			for (var i=0; i < elements.length; i++){
			elements[i].getText().then(function(txt){
			console.log(txt + "\n");
			});
			}
			});
	});

});