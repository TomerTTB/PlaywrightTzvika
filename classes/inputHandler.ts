import { Locator, expect, type Page } from '@playwright/test';
import practiceFormUser from '../data/practiceForm/practiceFormUser.json';

export class InputHandler {
    static async inputTextData(page: Page, elements: Locator[], dataPath: string) {
        const formData = practiceFormUser[dataPath];

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const placeholder = await element.getAttribute('placeholder');
            //console.log(placeholder);
            await element.type(formData[placeholder]);
        };
    };
};