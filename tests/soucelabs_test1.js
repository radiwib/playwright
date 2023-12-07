const { test, expect } = require('@playwright/test');

test('check title', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Swag Labs/);
  });