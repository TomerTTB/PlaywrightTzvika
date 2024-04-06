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

    test('Add input text', async ({ practiceFormPage }) => {
        await practiceFormPage.inputText();
    });

    test('Elements to click', async ({ practiceFormPage }) => {
        await practiceFormPage.elementClick();
    });

    test('Verify State drop down menue', async ({ practiceFormPage }) => {
        await practiceFormPage.elementDropDownStateVerify();
    });

    test('Verify City drop down menue', async ({ practiceFormPage }) => {
        await practiceFormPage.elementDropDownCityVerify();
    });

    test('Sumbit form', async ({ practiceFormPage }) => {
        await practiceFormPage.formSubmit();
    });
});

test.describe.only('Practice form Submit', () => {
    test('Verify practice form texts', async ({ practiceFormPage }) => {
        await practiceFormPage.verifyText();
        await practiceFormPage.inputText();
        await practiceFormPage.elementClick();
        await practiceFormPage.elementDropDownStateVerify();
        await practiceFormPage.elementDropDownCityVerify();
        await practiceFormPage.formSubmit();
        await practiceFormPage.submitFormVerify();
    });
});