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

    const loginPage = new LoginPage(driver);
    let currentHeader = await driver.$eval(loginPage.header, el => el.innerHTML);
    expect(currentHeader).toEqual('Login Page');

    const { validUsername, validPassword } = validUserFactory();
    await loginPage.enterUsername(validUsername);
    await loginPage.enterPassword(validPassword);
    await loginPage.clickLoginButton();

    const homePage = new HomePage(driver);
    let authenticated = false;
    try {
        await driver.waitFor(homePage.logoutButton);
        currentHeader = await driver.$eval(homePage.header, el => el.innerHTML);
        authenticated = true;
    } catch(e) {
        console.log(e);
    } finally {
        expect(currentHeader.includes('Secure Area')).toEqual(true);
        expect(authenticated).toBe(true);
    }

});

afterEach(async () => {
    await browser.close();
});