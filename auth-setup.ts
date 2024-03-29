import { test as setup, expect } from '@playwright/test';

const standardUserFile = './auth/standard_user.json';

setup('authenticate as stadard_user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.getByText('Products')).toBeVisible();

    // Save the state of the webpage - meaning we are logged in
    await page.context().storageState({ path: standardUserFile });
});

const standardProblemFile = './auth/problem_user.json';

setup('authenticate as problem_user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('problem_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.getByText('Products')).toBeVisible();

    // Save the state of the webpage - meaning we are logged in
    await page.context().storageState({ path: standardProblemFile });
});