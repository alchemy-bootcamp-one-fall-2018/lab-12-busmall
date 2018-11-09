//import html from './html.js';

import ProductSelector from './product-selector.js';    




const root = document.getElementById('root');
const app = new ProductSelector();
const dom = app.render();




root.appendChild(dom);