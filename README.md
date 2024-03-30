TS/Playwright Practice Project


Project Objective:
This project serves as a practice exercise in TypeScript (TS) and Playwright, demonstrating the use of object-oriented programming (OOP) principles and fixtures to create a scalable and maintainable solution for verifying text on a website.


Installation:
To install the necessary dependencies, run the following command:
npm install playwright


Running the Project:
To execute the project, use the following command:
npx playwright test --project=chromium1


Project Structure:

Fixtures Folder:
This folder contains fixture setups using the test.extend function.
Fixtures provide reusable setups that offer test contexts or resources.
* The base test is extended with custom fixtures, which are instances of PracticeFormPage and BookStorePage.
Fixture setup functions are asynchronous and create instances of respective page classes, passing a page object to them.
The use function is utilized to define what will be passed to the test after the fixture setup completes, enabling access to the page class instance.


Tests Folder:
Contains separate test (spec) files for each page object on the website.


Pages Folder:
Each page is represented as a page object model, facilitating better organization and maintenance.


Classes Folder:
PageBase: Creates the basic page playwright object to be used by most classes.
TextElementBuilder: Builds an array from the page elements for verification.
TextVerifier: Provides functions for text verification, usable by any page requiring text validation.


Utils Folder:
uiPages: Dynamically builds the URL for a test, enhancing flexibility and maintainability.

