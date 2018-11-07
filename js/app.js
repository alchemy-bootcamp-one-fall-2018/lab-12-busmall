import productsApi from './products-api.js';
import Header from './display.js';

const allProducts = productsApi.getAll();

console.log(allProducts);

//

const header = new Header();
const root = document.getElementById('root');
root.appendChild(header.render());
