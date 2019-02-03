const puppeteer = require('puppeteer');
const config = require('../config');
const validUserFactory = require('./factories/validUserFactory');
const LoginPage = require('./pageObjects/login.page');
const HomePage = require('./pageObjects/home.page');

let browser, driver;

beforeEach(async () => {
    // launch headless chromium browser
    browser = await puppeteer.launch({
        headless: true,
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
        const homePage = new HomePage(driver);
        await driver.waitFor(homePage.logoutButton);
        authenticated = true;
    } catch(e) {
        console.log(e);
    } finally {
        expect(authenticated).toBe(true);
    }
});

afterEach(async () => {
    await browser.close();
});