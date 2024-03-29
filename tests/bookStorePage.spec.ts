import { test } from '../fixtures/base';
import hooks from '../utils/hooks';
import uiPages from '../utils/uiPages';

test.beforeEach(async ({ page }) => {
    await hooks.beforeEach(page, uiPages.bookStore);
});

test.describe('Book Store', () => {
    test.only('Verify book store texts', async ({ bookStorePage }) => {
        await bookStorePage.verifyText();
    });
});