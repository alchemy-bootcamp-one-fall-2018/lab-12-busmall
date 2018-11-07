import product from './products.js';

const productApi = {
    getAll() {

        const survey = product.map(product => {
            return {
                name: product.name,
                image: product.image,
                views: 0,
                clicks:0
            };
        });

        return survey;

    }
};

export default productApi;

