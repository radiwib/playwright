import { test, expect } from '@playwright/test'
import { loginPage } from '../page/login'

test('login', async ({page}) => {

    const login = new loginPage(page)

    await login.go();
    await login.loginMethod('standard_user', 'secret_sauce');

})