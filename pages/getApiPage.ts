class ApiTest {
    async getApiResponse(url: string): Promise<any> {
        const response = await fetch('https://my-json-server.typicode.com/icedrone/json-demo-server/photos');
        return await response.json();
    }
}