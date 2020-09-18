const puppeteer = require('puppeteer');
const express = require('express');
var bodyParser = require('body-parser')

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.post('/screenshot', async (req, res) => {
  //opens the browser
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  //loads the url
  await page.goto('https://auth.revvsales.com/signin');

  //authentication
  await page.type('#signin-email-field', 'rajilechrame@gmail.com');
  await page.click('#signin-email-continue-btn');
  await page.waitForTimeout(3000)
  await page.click('#ft1g1ll2');
  await page.waitForTimeout(2000)
  await page.type('#signin-password-field', '1Revvsales@');

  //navigating to landing page
  await Promise.all([
    page.waitForNavigation(), // The promise resolves after navigation has finished
    page.click('#signin-button-field'), // Clicking the link will indirectly cause a navigation
  ]);

  //navigating to the document editing page
  await Promise.all([
    page.waitForNavigation(), // The promise resolves after navigation has finished
    page.goto('https://ft1g1ll2.revvsales.com/documents/DOC-000025'), // Clicking the link will indirectly cause a navigation
  ]);
  await page.waitForTimeout(2000);

  //entering values in the form fields 
  await page.focus('.revv-inp')
  await page.keyboard.down('Control');
  await page.keyboard.press('A');
  await page.keyboard.up('Control');
  await page.keyboard.press('Backspace');

  /*await page.keyboard.type('masai', {delay: 100})
  await page.keyboard.press('Tab')
  await page.keyboard.type('RRRAJU', { delay: 100 })
  await page.keyboard.press('Tab')
 

  await page.keyboard.type('2500', {delay: 100})*/
  
  

  /*await page.keyboard.type('Alto', {delay: 100})
  await page.keyboard.press('Tab')

  await page.keyboard.type('Yellow', {delay: 100})
  await page.keyboard.press('Tab')

  await page.keyboard.type('2018', {delay: 100})

  await page.waitForTimeout(2000); */
  //await page.type(".react-datepicker-ignore-onclickoutside", "01.04.20",{ delay: 100 })
  //await page.type("input", "01.01.20",{ delay: 100 })
  //Enter Date..
  //await page.keyboard.type('.react-datepicker-ignore-onclickoutside','20.05.08');
  //await page.keyboard.press('Enter');
  //await page.keyboard.press('Tab')

  await page.keyboard.type('RAJU', { delay: 100 })
  await page.keyboard.press('Tab')
  await page.keyboard.type('BABU', { delay: 100 })
  await page.keyboard.press('Tab')

  await page.keyboard.type('BANGALORE', { delay: 100 })
  await page.keyboard.press('Tab')

  await page.keyboard.type('SOMA', { delay: 100 })
  await page.keyboard.press('Tab')
  await page.keyboard.type('SUNDARAM', { delay: 100 })
  await page.keyboard.press('Tab')

  await page.keyboard.type('CHENNAI', { delay: 100 })
  await page.keyboard.press('Tab')

  await page.keyboard.type('ALTO', { delay: 100 })
  await page.keyboard.press('Tab')

  await page.keyboard.type('BLACK', { delay: 100 })
  await page.keyboard.press('Tab')

  await page.keyboard.type('2015', { delay: 100 })
  await page.keyboard.press('Tab')

  await page.keyboard.type('KA-03-2656', { delay: 100 })
  await page.keyboard.press('Tab')

  //await page.keyboard.type('18.09.20', { delay: 100 })
  //await page.keyboard.press('Tab')

  await page.keyboard.type('56785338', { delay: 100 })
  await page.keyboard.press('Tab')

  await page.keyboard.type('215', { delay: 100 })
  await page.keyboard.press('Tab')

  await page.waitForTimeout(2000); 
  
  //taking screenshot of the page

  await page.screenshot({ path: 'login.png' });

  //close the browser. now with the help of doc_no, doc_id and object_id, you can create a magic link of the document using revvsales api's
  await browser.close();
  res.json({ "name": "babu" })
})

app.listen(process.env.PORT)