import html from './js/html.js';
import productApi from './js/product-api.js';
import ProductSelector from './js/product-selector.js';


const products = productApi.getAll();

function makeTemplate() {
    return html`
        <main>
            <section id="product-selector">
                <h2>Vote for your favorite</h2>
                <p> Click on your favourite image</p>
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


