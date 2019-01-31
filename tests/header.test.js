const puppeteer = require('puppeteer');
const baseUrl = 'https://www.youtube.com/';

test('launch a chromium browser', async() => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const driver = await browser.newPage();
    await driver.goto(baseUrl);
});