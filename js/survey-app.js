import SurveyApi from './survey-api.js';
import html from './html.js';
import SurveyDisplay from './survey-display.js';

const products = SurveyApi.getAll();

function makeTemplate() {
    return html`
        <header>
            <h1>BusMall Products Survey Results</h1>
        </header>
        <p>Survey complete! Thank you for your participation!</p>
        <main>
            <section id="product-survey">
             
                <ul class="products"></ul>
                    

            </section>
        </main>
    `;
}

class SurveyApp {
    render() {
        const dom = makeTemplate();
      
        const list = dom.querySelector('.products');

        console.log(products);
      
        products.forEach(product => {
            const productSurvey = new SurveyDisplay(product);
            list.appendChild(productSurvey.render());
        });
     
      
      
        return dom;
      
    }
}

const app = new SurveyApp();
document.getElementById('root').appendChild(app.render());