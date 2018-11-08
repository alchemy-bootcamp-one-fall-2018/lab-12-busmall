import html from './html.js';
import ProductDisplay from './product-display.js';
import productApi from './products-api.js';

const products = productApi.getAll();

function makeTemplate(product) {
    return html`
        <ul>${product.name}</ul>
    <section id="image-section">
        <h2>App Focus Group Product List</h2>

    </section>
`;
}

class App {
    render() {
        const dom = makeTemplate(); 

        return dom;
    }
}

const app = new App();
document.getElementById('root').appendChild(app.render());