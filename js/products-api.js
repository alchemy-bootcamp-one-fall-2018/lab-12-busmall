import products from './products-master.js';
//import survey from './survey-app.js';

// according to marty's chart this should .getAll

const productsApi = {
    getAll() {
        return products;
    }
};
export default productsApi;
