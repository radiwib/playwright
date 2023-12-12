import { test, expect, chromium } from '@playwright/test'
import { loginPage } from '../page/login'
import { configTestLevel } from '../playwright_configTestLevel'

test('login', async ({page, browser, context}) => {


    const login = new loginPage(page);
    const config_testlevel = new configTestLevel(browser, context, chromium);

    config_testlevel.openBrowser;
    config_testlevel.setBrowserContext;

    await login.gotoLoginPage();
    await login.loginMethod('standard_user', 'secret_sauce');

})