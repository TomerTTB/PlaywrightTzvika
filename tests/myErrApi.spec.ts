const { test, expect } = require('@playwright/test');
import { request } from '@playwright/test';
import hooks from '../utils/hooks';
import uiPages from '../utils/uiPages';
let url = '';

test.beforeEach(() => {
    url = 'https://my-json-server.typicode.com/icedrone/json-demo-server/photos';
})
test('API Test', async ({ request, context }) => {
    // const apiUrl = `${context.baseURL}/${uiPages.apiPhotos}`;
    const apiUrl = url;

    // Send a GET request to the API URL
    const response = await fetch(apiUrl);
    const data = await response.json();


    //Assertions 
    expect(response.status).toBe(200); expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBe(1);

    const innerArray = data[0];
    expect(innerArray.length).toBe(5);

    for (const [index, obj] of innerArray.entries()) {
        expect(obj).toHaveProperty('albumId');
        expect(obj).toHaveProperty('id');
        expect(obj).toHaveProperty('title');
        expect(obj).toHaveProperty('url');
        expect(obj).toHaveProperty('thumbnailUrl');
    };
});
