
exports.loginPage = class loginPage {

    constructor(page) {

        this.page = page
        this.username_Textbox = page.locator('[data-test="username"]')
        this.password_Textbox = page.locator('[data-test="password"]')
        this.login_Button = page.locator('[data-test="login-button"]')

    }
async gotoLoginPage() {
    await this.page.goto('https://www.saucedemo.com/');
}

async loginMethod(username, password){
    await this.username_Textbox.fill(username);
    await this.password_Textbox.fill(password);
    await this.login_Button.click();
}

}
