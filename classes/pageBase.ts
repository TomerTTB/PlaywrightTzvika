import { type Page } from '@playwright/test';

export class pageBase {

    readonly page: Page;

    constructor(page: Page, elementText: string) {
        this.page = page;
    };
};