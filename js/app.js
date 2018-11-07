import html from './html.js';
import ProductDisplay from './product-card.js';
import productApi from './data-apis/product-api.js';
import ProductSelector from './product-selector.js';

const products = productApi.getAll();

function makeTemplate() {
    return html`
        <h1>Pick a Product</h1>
        <main>
            <section id="product-list">
                <h2>Vote for your favorite</h2>
            </section>
            <ul></ul> 
        </main>
    `;
}
class App {
    render() {
        const dom = makeTemplate();
        const productCardContainer = dom.querySelector('.product-display');
        const productCard = new ProductDisplay();
        const productCardDom = productCard.render();
        productCardContainer.appendChild(productCardDom);

        // const list = dom.querySelector('ul');
        // const productSelector = new ProductSelector(products);
    // list.appendChild(productSelector.render());
        
        return dom;
    }
}

const app = new App();
const root = document.getElementById('root');
root.appendChild(app.render());

export default App;

// let productSelector = new productSelector(this.products, prodcut => {
//     product.count ++;
//     this.total
// }