import { Page } from '@playwright/test';
import uiPages from '../utils/uiPages';

async function beforeEach(page: Page, targetPage: string) {
    await page.goto(`.${targetPage}`);
};

export default { beforeEach };