import products from '../js/products.js';

const productApi = {
    getAll() {
        return products;
    }
};

export default productApi;

// You will need a products-api.js (only has a getAll of static data) and a survey-api.js (only needs an add())