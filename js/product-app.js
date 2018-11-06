import productsApi from '../js/product-api.js';

const products = productsApi.getAll();

console.log(products[2]);