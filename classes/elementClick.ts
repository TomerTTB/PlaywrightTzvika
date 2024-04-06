import { Locator, expect, type Page } from '@playwright/test';

export class ElementsClick {
    static async clickOnElement(page: Page, elements: Locator[]) {
        for (let i = 0; i < elements.length; i++) {
            //console.log(elements[i]);
            await elements[i].click();
        };
    };
};