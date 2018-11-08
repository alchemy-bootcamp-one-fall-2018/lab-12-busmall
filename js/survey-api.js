//import productsApi from './products-api.js';
import survey from './survey.js';

survey = [];
const surveyApi = {
    surveyApi.add(survey),
}


export default surveyApi;


import productsMaster from './products-master.js';
const productsApi = {
    getAll() {
        const survey = productsMaster.map(product => {
            return {
                name: product.name,
                image: product.image,
                views: 0,
                clicks: 0
            };
        });
        return survey;
    }
};

export default productsApi;