import products from './product-list.js';


const productsApi = {
    getAll() {
        // const json = localStorage.getItem('products');
        // if(json){
        //     products = JSON.parse(json);
        // }
        return products;
    }
};

export default productsApi;
