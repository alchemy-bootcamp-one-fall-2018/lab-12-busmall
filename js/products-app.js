/*eslint-disable no-console*/
import productApi from './products-api.js';
import html from './html.js';
import ProductDisplay from './product-display.js';

const products = productApi.getAll();

function makeTemplate() {
    return html`
        <header>
            <h1>BusMall Products Survey</h1>
        </header>
        
        <main>
            <section id="product-display">
                <h3>Select A Product</h3>
                <p> You would be most likely to purchase </p>
            </section>
        </main>
    `;
}

class ProductsApp {
    render() {
        const dom = makeTemplate();
       
        const productDisplaySection = dom.querySelector('#product-display');
        const productDisplay = new ProductDisplay(products);
        productDisplaySection.appendChild(productDisplay.render());
        
        return dom;
    }
}

const app = new ProductsApp();
document.getElementById('root').appendChild(app.render());