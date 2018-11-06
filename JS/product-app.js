import productApi from './products-api.js';

const products = productApi.getAll();

console.log(products, 'productlist');