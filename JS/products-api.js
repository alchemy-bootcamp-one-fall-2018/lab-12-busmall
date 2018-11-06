import productData from './products-data.js';

const productsApi = {
    getAll() {
        return productData;
    }
};

export default productsApi;