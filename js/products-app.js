import productsApi from '../js/products-api.js';

const products = productsApi.getAll();

console.log(products[2]);