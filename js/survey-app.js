
import html from './html.js';
import productsApi from './products-api.js';
import ProductSelector from './product-selector.js';

const products = productsApi.getAll();

function makeTemplate() {
    return html`
    <header class="products-section">
    </header>
`;
}

class ImageApp {
    render() {
        const dom = makeTemplate();
        const productsSection = dom.querySelector('.products-section');
        const productSelector = new ProductSelector(products, survey => {
            window.location.href = '/user_summary.html';
        });

        productsSection.appendChild(productSelector.render());
        return dom;
    }
}

const imageApp = new ImageApp();
document.getElementById('root').appendChild(imageApp.render());

