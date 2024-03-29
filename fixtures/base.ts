import { test as baseTest } from '@playwright/test';
import { PracticeFormPage } from '../pages/practiceFormPage';
import { BookStorePage } from '../pages/bookStorePage';

// This file is setting the fixtures to be used in tests
type MyFixtures = {
    practiceFormPage: PracticeFormPage;
    bookStorePage: BookStorePage;
}

export const test = baseTest.extend<MyFixtures>({
    // loginPage: async ({ page }, use) => {
    //     await use(new LoginPage(page)); //The code inside the fixture will run until it sees the command use, at that point it will return to the caller test (02)

    //     //After it finished the code in the caller test he return here and do any code after the use (03)
    // },
    practiceFormPage: async ({ page }, use) => {
        await use(new PracticeFormPage(page));
    },
    bookStorePage: async ({ page }, use) => {
        await use(new BookStorePage(page));
    },
})
export { expect } from '@playwright/test';
