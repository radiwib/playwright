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

test('verify main title', async ({ page }) => {

    await expect(page.locator('#header_container')).toContainText('Product');
    await expect(page.locator('[class="app_logo"]')).toContainText('Swag Labs');

});

test.describe('checkout', async () => {
    test('checkout item', async ({ page }) => {

        //add to cart by item page
        await page.locator('#item_4_title_link').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="back-to-products"]').click();

        //add to cart by list page
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

        //go to cart
        await page.locator('[class="shopping_cart_link"]').click();

        //assert that the item is successfully added to the cart
        await expect(page.locator('#item_4_title_link')).toContainText('Sauce Labs Backpack');

        //checkout items
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
        await expect(page.locator('[class="complete-header"]')).toContainText('Thank you for your order!');
        await expect(page.locator('[class="complete-text"]')).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');

    })

    test('checkout item and cancel', async ({ page }) => {

        //add to cart by item page
        await page.locator('#item_4_title_link').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="back-to-products"]').click();

        //add to cart by list page
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

        //go to cart
        await page.locator('[class="shopping_cart_link"]').click();

        //cancel items
        await page.locator('[id="remove-sauce-labs-backpack"]').click();
        await page.locator('[id="remove-sauce-labs-bike-light"]').click();

        //const locator = page.locator('#cart_contents_container');
        //const locator = page.locator('[class="removed_cart_item"]');
        const locator = page.locator('[class="shopping_cart_link"]');
        //assert that the items was successfully removed
        //await expect(page.locator('[class="removed_cart_item"]').getAttribute('class').toContainText(''));
        //await expect(locator).toHaveClass(/removed_cart_item/);
        await expect(locator).toBeEmpty();
    })

})
