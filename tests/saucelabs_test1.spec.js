const { test, expect } = require('@playwright/test');

test('check title', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.pause();
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('Swag Labs');
    
    await page.click('id=user-name');
  });