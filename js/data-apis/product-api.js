import products from '../products.js';
// set up folder for apisgit
const productApi = {
    saveSurvey(survey) {
        localStorage.setItem('saveSurvey', JSON.stringify(survey));
    },
    getAll() {
        return products;
    }
};   

export default productApi;

