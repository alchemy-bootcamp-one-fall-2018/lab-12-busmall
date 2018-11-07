
import productList from './product-list.js';

const productApi = {
    getAll() {
        
        const survey = productList.map(product => {
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