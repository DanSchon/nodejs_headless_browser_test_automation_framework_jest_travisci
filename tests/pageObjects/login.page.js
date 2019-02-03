class LoginPage {

    constructor(driver) {
        this.driver = driver;  
    }

    enterUsername(username) {
        return this.driver.type('#username', username);
    }

    enterPassword(password) {
        return this.driver.type('#password', password);
    }

    clickLoginButton() {
        return this.driver.click('#login > button');
    }

}
module.exports = LoginPage;