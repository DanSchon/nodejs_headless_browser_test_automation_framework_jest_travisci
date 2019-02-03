const puppeteer = require('puppeteer');
const config = require('../config');
const validUserFactory = require('./factories/validUserFactory');
const LoginPage = require('./pageObjects/login.page');

let browser, driver;

beforeEach(async () => {
    // launch headless chromium browser
    browser = await puppeteer.launch({
        headless: false,
        args: ['--no-sandbox'] // for travis ci vm
    });
    driver = await browser.newPage();
    // navigate to base url
    await driver.goto(config.baseUrl);
});

test('user can authenticate with valid credentials', async () => {
    const { validUsername, validPassword } = validUserFactory();

    const loginPage = new LoginPage(driver);
    await loginPage.enterUsername(validUsername);
    await loginPage.enterPassword(validPassword);
    await loginPage.clickLoginButton();

    let authenticated = false;
    try {
        await driver.waitFor('a[href="/logout"]');
        authenticated = true;
    } catch(e) {
        console.log('user with valid credentials was not authenticated');
    } finally {
        expect(authenticated).toBe(true);
    }
});

afterEach(async () => {
    await browser.close();
});