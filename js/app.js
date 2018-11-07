// globals arrayOfProducts 

import productDisplay from './assets.js'; 
import productApi from './product-api.js'; 
// import product from './data/products.js';

const products = productApi.getAll(); 

let ProductDisplay = new ProductDisplay(products); 

let app = document.getElementById('product-selection'); 
app.appendChild(productDisplay.render()); 

// let productSelector = new productSelector(this.products, prodcut => {
//     product.count ++;
//     this.total
// }