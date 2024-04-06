import {
    Locator, Page, ElementBuilder, PageBase, TextVerifier, elements
} from '../utils/imports.ts';

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
