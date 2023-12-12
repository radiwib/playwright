
class LoginPage {
    
    constructor(page) {

        this.page = page
        this.usernameTextbox = page.locator('[data-test="username"]');
        this.passwordTextbox = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');

    }
    

}
