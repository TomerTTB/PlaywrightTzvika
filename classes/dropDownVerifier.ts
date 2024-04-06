import { Locator, expect, type Page } from '@playwright/test';

export class ElementsDropDown {
    static async dropDownVerifyState(page: Page, elements: Locator[]) {
        //console.log('I am here');
        for (let i = 0; i < elements.length; i++) {
            await page.locator('#state svg').click();
            await elements[i].click();
            await expect(elements[i]).toBeVisible();
        };
    };

    static async dropDownVerifyCity(page: Page, elementsState: Locator[],
        ElementsNcrCity: Locator[],
        ElementsUttarCity: Locator[],
        ElementsHaryanaCity: Locator[],
        ElementsRajasCity: Locator[]
    ) {
        const cityElements = [ElementsNcrCity, ElementsUttarCity, ElementsHaryanaCity, ElementsRajasCity]
        for (let i = 0; i < elementsState.length; i++) {
            await page.locator('#state svg').click();
            await elementsState[i].click();

            for (let y = 0; y < cityElements[i].length; y++) {
                await page.locator('#city svg').click();
                await cityElements[i][y].click();
                await expect(cityElements[i][y]).toBeVisible();
            }
        }
    };
};