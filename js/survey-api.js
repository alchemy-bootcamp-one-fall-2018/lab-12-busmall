import productApi from './product-api.js';


const surveyApi = {
    init() {
        let products = productApi.getAll();
    },

    store(newProducts) {
        localStorage.setItem('products', JSON.stringify(newProducts));
    }
};

export default surveyApi;