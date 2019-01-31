const puppeteer = require('puppeteer');

test('launch a headless chromium browser', async() => {
    const browser = await puppeteer.launch({
        headless: true
    });
    const window = await browser.newPage();
});