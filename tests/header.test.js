const puppeteer = require('puppeteer');

test('launch a chromium browser', async() => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const window = await browser.newPage();
});