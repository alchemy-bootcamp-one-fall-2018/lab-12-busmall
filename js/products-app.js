import productApi from './products-api.js';
import html from './html.js';
// import Header from './header.js';
import ProductDisplay from './product-display.js';

const products = productApi.getAll();

function makeTemplate() {
    return html`
        <header>
            <h1>BusMall Products Survey</h1>
        </header>
        
        <main>
            <section id="product-display">
                <h2>Select A Product</h2>
            </section>
        </main>
    `;
}

class ProductsApp {
    render() {
        const dom = makeTemplate();
        
        // reference section elements
        // const headerSection = dom.querySelector('header');
        const productDisplaySection = dom.querySelector('#product-display');
        
        // header
        // const header = new Header();
        // headerSection.appendChild(header.render());
         
        // product display
        const productDisplay = new ProductDisplay(products);
       
        productDisplaySection.appendChild(productDisplay.render());
        
        
        return dom;
        
    }
}

const app = new ProductsApp();
document.getElementById('root').appendChild(app.render());