import { type Locator, type Page } from '@playwright/test';
import { TextElementBuilder } from '../classes/textElementBuilder';
import { InputBase } from '../classes/inputBase';
import { TextVerifier } from '../classes/textVerifier';
import { elements } from '../data/practiceFormElements';

export class PracticeFormPage extends InputBase {

    //Variables 
    myElements: Locator[];

    //constructor
    constructor(page: Page) {
        super(page, '');
        this.myElements = TextElementBuilder.buildElements(page, elements)
    };

    //Methods
    async verifyText() {
        await TextVerifier.verifyText(this.page, this.myElements);
    }
};