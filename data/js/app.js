// globals arrayOfProducts 

import ImageDisplay from './assets.js'; 
import productApi from './product-api.js'; 

const products = productApi.getAll(); 

let productDisplay = new ImageDisplay(products); 

let app = document.getElementById('product-selection'); 
app.appendChild(productDisplay.render()); 
