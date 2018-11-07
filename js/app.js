// import html from './html.js';
import ProductDisplay from './product-display.js';
// import productApi from './products-api.js';

// const products = productApi.getAll();

// function makeTemplate() {
//     return html`

//     <section id="image-section">
//         <h2>Focus Group Product List</h2>
//     </section>
// `;
// }

const productDisplay = new ProductDisplay();
const root = document.getElementById('root');
root.appendChild(productDisplay.render());