import { test, expect } from '@playwright/test';

test('open youtube', async ({page}) => {

    await page.goto('https://www.youtube.com/');
    await page.getByLabel('Sign in').click();
    await page.getByLabel('Email or phone').click();
    await page.getByLabel('Email or phone').fill('radi.wib@gmail.com');
    await page.getByRole('button', { name: 'Next' }).click();
    //assert if youtube can't be acces by automation browser
    await expect(page.locator('#headingText')).toContainText('Couldn’t sign you in');
    await expect(page.locator('section')).toContainText('This browser or app may not be secure. Learn more');
    await expect(page.locator('section')).toContainText('Try using a different browser. If you’re already using a supported browser, you can try again to sign in.');

    await page.pause();
});