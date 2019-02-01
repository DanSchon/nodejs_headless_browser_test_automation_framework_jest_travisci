const puppeteer = require('puppeteer');
const config = require('../config');
const validUserFactory = require('./factories/validUserFactory');

let browser, driver;

beforeEach(async () => {
    // launch headless chromium browser
    browser = await puppeteer.launch({
        headless: false
    });
    driver = await browser.newPage();
    // navigate to base url
    await driver.goto(config.baseUrl);
});

test('user can authenticate with valid credentials', async () => {
    const { validUsername, validPassword } = validUserFactory();

    // enter valid username
    await driver.type('#username', validUsername);
    // enter valid password
    await driver.type('#password', validPassword);
    // click Login button
    await driver.click('#login > button');

    // wait for Logout button to appear
    let authenticated;
    try {
        await driver.waitFor('a[href="/logout"]');
        authenticated = true;
    } catch(e) {
        authenticated = false;
    } finally {
        expect(authenticated).toBe(true);
    }
});

afterEach(async () => {
    await browser.close();
});