
import products from './product-list.js';

const productApi = {
    getAll() {
        
        const survey = products.map(product => {
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

export default productApi;