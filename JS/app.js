import productApi from './product-api.js';
import ImageSelector from './image-selector.js';
import html from './html.js';


function makeTemplate() {
    return html`
    <header>
        <div> 
            <h1>Select a Product</h1>
        </div>
    </header>
    <main>
        <section class="product-selector"></section>
    </main>
    `;
}


export default class App {
    constructor(products, onSelect) {
        this.products = productApi.getAll();
        this.onSelect = onSelect;
        this.totalCount = 0;
    }

    render() {
        
        const dom = makeTemplate();
        // this.totalCount++;

        let imageSelector = new ImageSelector(this.products, product => {
            product.count++;
                // this.totalCount++;
            productApi.save();
        });
        let productSection = dom.querySelector('.product-selector');
        productSection.appendChild(imageSelector.render());

        
        return dom;
    }
}

const productApp = new App();
document.getElementById('root').appendChild(productApp.render());










// const products = productApi.getAll();

// // console.log('hello its me', products);

// let imageDisplay = new ImageDisplay(products);

// let imageBox = document.getElementById('root-image-display');

// imageBox.appendChild(imageDisplay.render());