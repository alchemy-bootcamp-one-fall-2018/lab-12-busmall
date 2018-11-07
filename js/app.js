import html from './html.js';
import productApi from './data-apis/product-api.js';
import ProductSelector from './product-selector.js';

const products = productApi.getAll();

function makeTemplate() {
    return html`
        <h1>Pick a product!</h1>

        <main>
            <section id="product-selector">
                <h2>Vote for your favorite</h2>
            </section>
        </main>
    `;
}
class SurveyApp {
    render() {
        const dom = makeTemplate();
        const selectorSection = dom.querySelector('#product-selector');
        const productSelector = new ProductSelector(products);
        selectorSection.appendChild(productSelector.render());
        
        return dom;
    }
}

const surveyApp = new SurveyApp();
const root = document.getElementById('root');
root.appendChild(surveyApp.render());