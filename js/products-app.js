// import productsApi from '../js/products-api.js';
import Header from '../js/products-selector.js';

// const products = productsApi.getAll();
const header = new Header();
const root = document.getElementById('root');
root.appendChild(header.render());

