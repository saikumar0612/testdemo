var Excel = require('H:/jenkins/workspace/sample-pipeline/sample testlogin/node_modules/exceljs');

var inboundWorkbook = new Excel.Workbook();
inboundWorkbook.xlsx.readFile("H:/jenkins/workspace/sample-pipeline/sample testlogin/e2e/Book1.xlsx").then(function() {
 var inboundWorksheet = inboundWorkbook.getWorksheet(1);
 browser.waitForAngularEnabled(false);

 var totalRowsIncludingEmptyRows = inboundWorksheet.rowCount

 for (var i = 1; i <= totalRowsIncludingEmptyRows; i++) {
  var cellValue = inboundWorksheet.getRow(i).getCell(i).toString();

 }

 global.firstname = inboundWorksheet.getRow(2).getCell(1).toString();
 global.lastname = inboundWorksheet.getRow(2).getCell(2).toString();
 global.username = inboundWorksheet.getRow(2).getCell(3).toString();
 global.password = inboundWorksheet.getRow(2).getCell(4).toString();


});

describe('Code for angular project', function() {

 browser.ignoreSynchronization = true; // for non-angular websites
 it('open the browser', function() {
  browser.get(browser.params.url);
  browser.manage().window().maximize();
  browser.manage().timeouts().implicitlyWait(200000);
 });

 it('click on registeration', function() {
  var registeration = element(by.xpath("//a[@class='btn btn-link']"));
  registeration.click();
  browser.sleep(3000);
 });

 it('Enter the firstname', function() {
  var firstnames = element(by.xpath("//form[1]/div[1]/input[1]")).click();
  firstnames.sendKeys(firstname);

 });

 it('Enter the lastname', function() {
  var lastnames = element(by.xpath("//form[1]/div[2]/input[1]")).click();
  lastnames.sendKeys(lastname);
 });

 it('Enter the loginname', function() {
  var loginname = element(by.xpath("//div[3]//input[1]")).click();
  loginname.sendKeys(username);
 });


 it('Enter the loginpassword', function() {
  var loginpassword = element(by.xpath("//div[4]//input[1]")).click();
  loginpassword.sendKeys(password);
 });

 it('click for registeration', function() {
  var saveregisteration = element(by.xpath("//button[@class='btn btn-primary']"));
  saveregisteration.click();
  browser.sleep(3000);
 });


 it('Enter the userloginname', function() {
  var userloginname = element(by.xpath("//form[1]/div[1]/input[1]")).click();
  userloginname.sendKeys(username);
 });


 it('Enter the userloginpassword', function() {
  var userloginpassword = element(by.xpath("//div[2]//input[1]")).click();
  userloginpassword.sendKeys(password);
 });

 it('click for userlogin', function() {
  var userlogin = element(by.xpath("//button[@class='btn btn-primary']"));
  userlogin.click();
  browser.sleep(3000);
 });

 it('click for delete user', function() {
  var deleteuser = element(by.xpath("//a[@class='text-danger']"));
  deleteuser.click();
  browser.sleep(3000);
 });

 it('click for logoutuser', function() {
  var logoutuser = element(by.xpath("//a[contains(text(),'Logout')]"));
  logoutuser.click();
  browser.sleep(3000);
 });

});