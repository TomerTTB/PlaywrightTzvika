import { expect } from '@playwright/test';
import {
    Locator, Page, ElementBuilder, PageBase, TextVerifier, elementsText, elementsInput, InputHandler, ElementsClick, elementsClick, elementsDropDown, ElementsDropDown, elementsSubmit
} from '../utils/imports.ts';

export class PracticeFormPage extends PageBase {

    //Variables 
    myElementsText: Locator[];
    myElementsInput: Locator[];
    myElementsClick: Locator[];
    myElementsDropDownState: Locator[];
    myElementsDropDownCity: Locator[];
    myElementsDropDownNcrCity: Locator[];
    myElementsDropDownUttarCity: Locator[];
    myElementsDropDownHaryanaCity: Locator[];
    myElementsDropDownRajasCity: Locator[];
    myElementsSubmit: Locator[];

    //constructor
    constructor(page: Page) {
        super(page);
        this.myElementsText = ElementBuilder.buildElements(page, elementsText);
        this.myElementsInput = ElementBuilder.buildElements(page, elementsInput);
        this.myElementsClick = ElementBuilder.buildElements(page, elementsClick);
        this.myElementsDropDownState = ElementBuilder.buildElements(page, elementsDropDown[0]);
        this.myElementsDropDownNcrCity = ElementBuilder.buildElements(page, elementsDropDown[1]);
        this.myElementsDropDownUttarCity = ElementBuilder.buildElements(page, elementsDropDown[2]);
        this.myElementsDropDownHaryanaCity = ElementBuilder.buildElements(page, elementsDropDown[3]);
        this.myElementsDropDownRajasCity = ElementBuilder.buildElements(page, elementsDropDown[4]);
        this.myElementsSubmit = ElementBuilder.buildElements(page, elementsSubmit);
    };

    //Methods
    async verifyText() {
        await TextVerifier.verifyText(this.page, this.myElementsText);
    };

    async inputText() {
        await InputHandler.inputTextData(this.page, this.myElementsInput, 'Happy Path');
    };

    async elementClick() {
        await ElementsClick.clickOnElement(this.page, this.myElementsClick);
    };

    async elementDropDownStateVerify() {
        await ElementsDropDown.dropDownVerifyState(this.page, this.myElementsDropDownState);
    };

    async elementDropDownCityVerify() {
        await ElementsDropDown.dropDownVerifyCity(this.page, this.myElementsDropDownState,
            this.myElementsDropDownNcrCity,
            this.myElementsDropDownUttarCity,
            this.myElementsDropDownHaryanaCity,
            this.myElementsDropDownRajasCity)
    };

    async formSubmit() {
        await this.page.getByRole('button', { name: 'Submit' }).click();
    };

    async submitFormVerify() {
        await TextVerifier.verifyText(this.page, this.myElementsSubmit);
    };
};