
import productsApi from './products-api.js';
import Header from './display.js';

const products = productsApi.getAll();

console.log(products);

const header = new Header();
const root = document.getElementById('root');
root.appendChild(header.render());