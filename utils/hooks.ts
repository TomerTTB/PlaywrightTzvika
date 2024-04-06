import { Page } from '@playwright/test';
import uiPages from '../utils/uiPages';

async function beforeEach(page: Page, targetPage: string) {
    await page.goto(`.${targetPage}`);
};

async function beforeEachApi(page: Page, targetPage: string) {
    await page.goto(`.${targetPage}`);
};

export default { beforeEach };