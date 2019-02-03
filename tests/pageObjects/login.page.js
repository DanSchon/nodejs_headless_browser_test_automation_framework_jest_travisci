class LoginPage {

    constructor(driver) {
        this.driver = driver;
        this.usernameField = '#username';
        this.passwordField = '#password';
        this.loginButton = '#login > button';
    }

    enterUsername(username) {
        return this.driver.type(this.usernameField, username);
    }

    enterPassword(password) {
        return this.driver.type(this.passwordField, password);
    }

    clickLoginButton() {
        return this.driver.click(this.loginButton);
    }

}
module.exports = LoginPage;