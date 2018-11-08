import ImageDisplay from './image-display.js'; 
import productApi from './product-api.js'; 
import html from './html.js'; 
import ProductSelector from './product-selector.js'; 

const products = productApi.getAll(); 

function makeTemplate() {
    return html`
        <header> 
        <h1>Useless Products Survey</h1>
        </header>
        <main>
        <section class="product-selector"></section>
        <ul class="products"></ul>
        <h2>Which is the product you're most likely to buy?</h2>
        </main>

    `;
}

class ProductApp {
    constructor(products, onSelect) {
        this.products = products; 
        this.onSelect = onSelect; 
        this.products = productApi.getAll();
        this.totalCount = 0; 
    }
    render() {
        const dom = makeTemplate();
        this.list = dom.querySelector('ul'); 
        this.totalCount++; 

        let productSelector = new ProductSelector(this.products, product => {
            product.count++;
            this.totalCount++;
            productApi.save();
            let selectorSection = dom.querySelector('.product-selector');
            selectorSection.appendChild(productSelector.render());
        });

        for(let i = 0; i < 3; i++) {
            const imageDisplay = new ImageDisplay(products, () => {
            }); 
            this.list.appendChild(imageDisplay.render()); 

        }
        return dom;
    }
}

const productApp = new ProductApp; 

document.getElementById('root').appendChild(productApp.render()); 