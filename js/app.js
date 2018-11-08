import ImageDisplay from './image-display.js'; 
import productApi from './product-api.js';
import surveyApi from './survey-api.js'; 
import html from './html.js'; 

function makeTemplate() {
    return html`
        <header> 
        <h1>Useless Products Survey</h1>
        </header>
        <main>
        <section class="product-selector"></section>
        <ul class="products"></ul>
        <h2>Which is the product you're most likely to buy?</h2>
        <h5>(and why is it the dragon meat?)</h5>
        </main>

    `;
}

class ProductApp {
    constructor() {
        this.products = productApi.getAll();
        this.totalRounds = 0;
    }
    render() {
        const dom = makeTemplate();
        this.list = dom.querySelector('section');
        
        const productDisplay = new ImageDisplay(this.products, product => {
            this.totalRounds++;
            product.clicks++;
            surveyApi.add(product);

            if(this.totalRounds === 25) {
                window.location.href = '../user-summary.html';
            }
            productDisplay.update();
        }, 

        product => {
            product.views++;
        });
        
        this.list.appendChild(productDisplay.render());
        return dom;
    }
}

const productApp = new ProductApp; 

document.getElementById('root').appendChild(productApp.render()); 