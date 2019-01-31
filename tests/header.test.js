const puppeteer = require('puppeteer');
const config = require('../config');

let browser, driver;

beforeEach(async() => {
    // launch chromium browser
    browser = await puppeteer.launch({
        headless: false
    });
    driver = await browser.newPage();
});

test('navigate to base url', async() => {
    // navigate to base url
    await driver.goto(config.baseUrl);
    // extract text from logo
    const logoText = await driver.$eval('#logo', el => el.tooltipText_);
    // verify actual logo text matches expected value
    expect(logoText).toEqual('YouTube Home');
});

afterEach(async() => {
    await browser.close();
});