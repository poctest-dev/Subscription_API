
const assert = require('assert').strict
const {Given , When,  Then, AfterAll, After} = require('@cucumber/cucumber')
const {Builder , By }= require('selenium-webdriver')

require('geckodriver')

const driver = new Builder().forBrowser('firefox').build()

          Given('I am on Site Homepage', {timeout: 60 * 1000}, async function () {
            await driver.get('http://localhost:3000/')
          });
 
  
 
          When('I enter {int}', async function (cid) {
               const element =  await driver.findElement(By.name("customer_id"))
               element.sendKeys(cid)
          });
 
    
          When('I click submit button', async function () {
            await driver.findElement(By.name("btn")).click()
            driver.sleep(10000)
           
          });

          Then('I should get "{string}" details of customer', async function (details) {
            const element =  await driver.findElement(By.name("subs"))
            element.getText().then(function(text) {

              console.log("text" + text)
              console.log("details" + details)
              
              assert.equal(text ,details)
            })
            
          

          });

	

 
    
 
         
 
 

 
        
 
 

                               