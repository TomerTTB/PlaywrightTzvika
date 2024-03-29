import test, { expect } from '@playwright/test';

test('Login', async ({ page }) => {
    // await page.goto("https://commitquality.com/login");
    // await page.locator('[data-testid="username-textbox"]').fill("test");
    // await page.locator('[data-testid="password-textbox"]').fill("test");
    // await page.locator('[data-testid="login-button"]').click();

    // await expect(page.locator('[data-testid="navbar-logout"]')).toBeVisible();
    // // Save the state of the webpage - meaning we are logged in
    // await page.context().storageState({ path: "./loginAuthCQ.json" });

    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.getByText('Products')).toBeVisible();
    // Save the state of the webpage - meaning we are logged in
    await page.context().storageState({ path: "./loginAuthCQ.json" });
});