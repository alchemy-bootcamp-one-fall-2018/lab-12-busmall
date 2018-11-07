
//import products from './product-api.js'; 
import Picture from './product-selector.js';

const root = document.getElementById('root');
const app = new Picture();
const dom = app.render();

root.appendChild(dom);