const puppeteer = require('puppeteer');
const baseUrl = 'https://www.youtube.com/';

test('launch a headless chromium browser', async() => {
    const browser = await puppeteer.launch({
        headless: true
    });
    const driver = await browser.newPage();
    await driver.goto(baseUrl);
});

