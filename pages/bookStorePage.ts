import { type Locator, type Page } from '@playwright/test';
import { ElementBuilder } from '../classes/ElementBuilder';
import { PageBase } from '../classes/pageBase';
import { TextVerifier } from '../classes/textVerifier';
import { elements } from '../data/bookStoreElements';

export class BookStorePage extends PageBase {
    //Variables 
    myElements: Locator[];

    //constructor
    constructor(page: Page) {
        super(page);
        this.myElements = ElementBuilder.buildElements(page, elements)
    };

    //Methods
    async verifyText() {
        await TextVerifier.verifyText(this.page, this.myElements);
    }
};
