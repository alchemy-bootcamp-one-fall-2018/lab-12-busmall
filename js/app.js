import html from './html.js';
import productsApi from './products-api.js';
import ProductSelector from './product-selector.js';

const products = productsApi.getAll();

function makeTemplate() {
    return html`
    <section class="image-section">
        <h2>App Focus Group Product List</h2>

    </section>
`;
}

class App {
    render() {
        const dom = makeTemplate(); 
 
        const productSelectorOnApp = dom.querySelector('.image-section');
        const productSelector = new ProductSelector(products);
        productSelectorOnApp.appendChild(productSelector.render());

        return dom;
    }
}

const app = new App();
document.getElementById('root').appendChild(app.render());