const puppeteer = require('puppeteer');
const baseUrl = 'https://www.youtube.com/';

test('launch a chromium browser', async() => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const driver = await browser.newPage();
    
    // navigate to base url
    await driver.goto(baseUrl);
    // extract text from logo
    const logoText = await driver.$eval('#logo', el => el.tooltipText_);
    // verify actual logo text matches expected value
    expect(logoText).toEqual('YouTube Home');
});