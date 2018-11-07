import html from './html.js';
import productApi from './data-apis/product-api.js';
import ProductSelector from './product-selector.js';

const products = productApi.getAll();

function makeTemplate() {
    return html`
        <h1>Pick a product!</h1>

        <main>
            <section id="product-list">
                <h2>Vote for your favorite</h2>
                <p>Click on your favorite!</p>
            </section>
            <ul></ul>
        </main>
    `;
}
class SurveyApp {
    render() {
        const dom = makeTemplate();
        const listItem = dom.querySelector('ul');
        const productSelector = new ProductSelector(products);
        listItem.appendChild(productSelector.render());
        
        return dom;
    }
}

const surveyApp = new SurveyApp();
const root = document.getElementById('root');
root.appendChild(surveyApp.render());