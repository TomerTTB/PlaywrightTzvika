import { Page, Locator } from '@playwright/test';

export class TextElementBuilder {
    static buildElements(page: Page,
        elements: { functionType: string; role?, text: string; exact?: boolean }[]): Locator[] {
        const myElements: Locator[] = [];

        for (const element of elements) {
            const { functionType, ...params } = element;
            let currentElement;

            switch (element.functionType) {
                case 'getByText':
                    currentElement = page.getByText(params.text, params.exact ? { exact: true } : {});
                    break;
                case 'getByRole':
                    currentElement = page.getByRole(params.role, { name: params.text });
            }
            if (currentElement) {
                myElements.push(currentElement);
            };
        }
        return myElements;
    };
};