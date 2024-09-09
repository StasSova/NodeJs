import {ApiClient} from "./services/ApiClient.js";

const apiClient = new ApiClient('http://localhost:3000');

async function run() {
    console.log("---------- GET START ----------");
    await apiClient.get('/products');
    console.log("----------- GET END -----------");

    console.log("---------- POST START ----------");
    await apiClient.post('/products', { name: 'Product 4', price: 400 });
    console.log("----------- POST END -----------");

    console.log("---------- PUT START ----------");
    await apiClient.put('/products/1', { name: 'Updated Product 1', price: 150 });
    console.log("----------- PUT END -----------");

    console.log("---------- DELETE START ----------");
    await apiClient.delete('/products/2');
    console.log("---------- DELETE END ----------");

    console.log("---------- GET START ----------");
    await apiClient.get('/products');
    console.log("----------- GET END -----------");
}

run();