import { test, expect } from '@playwright/test';

test.beforeEach('login', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    //await expect(page.locator('#header_container')).toContainText('Products');

});

test('verify main title', async ({page}) => {

    await expect(page.locator('#header_container')).toContainText('Product');
    await expect(page.locator('[class="app_logo"]')).toContainText('Swag Labs');

});

test('checkout 1 item', async ({page}) => {

    await page.locator('#item_4_title_link').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="back-to-products"]').click();
    await page.locator('[class="shopping_cart_link"]').click();
    
    //assert that the item is successfully added to the chart
    await expect(page.locator('#item_4_title_link')).toContainText('Sauce Labs Backpack');
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('mantab');
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill('joss');
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('1234');
    await page.locator('[data-test="continue"]').click();
    
    //assert that the item has successfully go to checkout
    await expect(page.locator('#item_4_title_link')).toContainText('Sauce Labs Backpack');
    await page.locator('[data-test="finish"]').click();
    
    //assert that the order has been successed
    await expect(page.getByRole('heading')).toContainText('Thank you for your order!');

})