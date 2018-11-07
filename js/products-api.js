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
