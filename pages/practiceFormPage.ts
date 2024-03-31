import { type Locator, type Page } from '@playwright/test';
import { ElementBuilder } from '../classes/ElementBuilder';
import { PageBase } from '../classes/pageBase';
import { TextVerifier } from '../classes/textVerifier';
import { elementsText } from '../data/practiceFormElementsText';
import { elementsInput } from '../data/practiceFormElementsInput';
import { InputVerifier } from '../classes/inputVerifier';

export class PracticeFormPage extends PageBase {

    //Variables 
    myElementsText: Locator[];
    myElementsInput: Locator[];

    //constructor
    constructor(page: Page) {
        super(page);
        this.myElementsText = ElementBuilder.buildElements(page, elementsText);
        this.myElementsInput = ElementBuilder.buildElements(page, elementsInput);

    };

    //Methods
    async verifyText() {
        await TextVerifier.verifyText(this.page, this.myElementsText);
    }

    async inputText() {
        await InputVerifier.inputText(this.page, this.myElementsInput, 'Happy Path');
    }

};