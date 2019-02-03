class HomePage {
    constructor(driver) {
        this.driver = driver;
        this.header = '#content > div > h2';
        this.logoutButton = 'a[href="/logout"]';
    }

    clickLogoutButton() {
        this.driver.click(this.logoutButton);
    }
}

module.exports = HomePage;