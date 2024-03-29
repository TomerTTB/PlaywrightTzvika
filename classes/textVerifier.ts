import { Locator, expect, type Page } from '@playwright/test';

export class TextVerifier {
    static async verifyText(page: Page, elements: Locator[]) {
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            await expect(element).toBeVisible();
        }
    }
};
