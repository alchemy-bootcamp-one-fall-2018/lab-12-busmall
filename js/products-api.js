import productsMaster from './products-master.js';
import survey from './survey-app.js';
const productsApi = {
    getAll() {
        survey = productsMaster.map(product => {  //was: const survey =...
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
