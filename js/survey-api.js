import ProductsApi from './products-api.js';

const surveyApi = {
    add() {
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

export default surveyApi;