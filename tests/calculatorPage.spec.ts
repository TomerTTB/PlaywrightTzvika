const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
});

test.describe('Calculator', () => {
    test.only('Verify button change', async ({ page }) => {
        // console.log('I am here');
        // await page.goto('http://localhost:3000/');

        const initialScreenshot = await page.screenshot();

        let buttonChangeDetected = false;

        while (!buttonChangeDetected) {
            await page.getByRole('button', { name: '5' }).click();
            await page.getByRole('button', { name: '+', exact: true }).click();

            const currentScreenshot = await page.screenshot();

            const result = await expect(currentScreenshot).toMatchSnapshot(initialScreenshot, 'Screenshot comparison');

            if (!result) {
                buttonChangeDetected = true;
                console.log('Button change detected!');
                break;
            }
        }
    });
});
