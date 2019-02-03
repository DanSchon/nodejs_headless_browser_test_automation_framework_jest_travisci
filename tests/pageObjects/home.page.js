class HomePage {
    constructor(driver) {
        this.driver = driver;
        this.logoutButton = 'a[href="/logout"]';
    }

    clickLogoutButton() {
        this.driver.click(this.logoutButton);
    }
}

exports.default = HomePage;