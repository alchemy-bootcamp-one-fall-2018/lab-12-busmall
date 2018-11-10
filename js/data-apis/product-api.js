import products from '../products.js';


const productApi = {
    saveSurvey(survey) {
        localStorage.setItem('saveSurvey', JSON.stringify(survey));
    },

    getAll() {
        return products;
    }
};

export default productApi;