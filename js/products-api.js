import productsList from './product-list.js';
let products = [];
const productsApi = {
    getAll() {
        const json = localStorage.getItem('results');
        if(json) {
            products = JSON.parse(json);
        }
        return products;
    }
};

export default productsApi;