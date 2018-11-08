import productsData from '../js/products-data.js';


const productsApi = {
    getAll() {
        const survey = productsData.map(product => {
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