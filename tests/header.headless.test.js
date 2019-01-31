const puppeteer = require('puppeteer');
const baseUrl = 'https://www.youtube.com/';

let browser, driver;

beforeEach(async() => {
    // launch headless chromium browser
    browser = await puppeteer.launch({
        headless: true
    });
    driver = await browser.newPage();
});

test('navigate to base url', async () => {
    // navigate to base url
    await driver.goto(baseUrl);
    // extract text from logo
    const logoText = await driver.$eval('#logo', el => el.tooltipText_);
    // verify actual logo text matches expected value
    expect(logoText).toEqual('YouTube Home');
});