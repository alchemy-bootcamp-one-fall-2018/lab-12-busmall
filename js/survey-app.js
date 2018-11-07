import html from './html.js';
import productApi from '../api/product-api.js';
import surveyApi from '../api/survey-api.js';
import ProductSelector from './product-selector.js';

const products = productApi.getAll();

function makeTemplate() {
    return html`
        <header>
            <div>
                <h1>BusMall</h1>
            </div>
            <nav>
                <a href="./">Home</a>
            </nav>
        </header>
        <main> 
            <section>  
                <h2>Product Survey</h2>
            </section>
        </main>`;
}

class SurveyApp {
    render() {
        const dom = makeTemplate();

        const mainSection = dom.querySelector('main');
        
        const productSelector = new ProductSelector(products, survey => {
            surveyApi.add(survey);
            window.location = './complete.html';
        });

        mainSection.appendChild(productSelector.render());

        return dom;
    }
}

const surveyApp = new SurveyApp();
document.getElementById('root').appendChild(surveyApp.render());