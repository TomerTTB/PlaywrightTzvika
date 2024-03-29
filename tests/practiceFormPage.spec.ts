import { test } from '../fixtures/base';
import hooks from '../utils/hooks';
import uiPages from '../utils/uiPages';

test.beforeEach(async ({ page }) => {
    await hooks.beforeEach(page, uiPages.practiceForm);
});

test.describe('Practice form', () => {
    test('Verify practice form texts', async ({ practiceFormPage }) => {
        await practiceFormPage.verifyText();
    });
});