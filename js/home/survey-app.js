/*eslint-disable no-console*/
import productsApi from '../products-api.js';
import surveyApi from '../survey-api.js';
import ProductDisplay from './ProductDisplay.js';
import html from '../html.js';

function makeTemplate() {
    return html`
    <header>
        <h1>Busmall Products Survey</h1>
        <p>Please pick one image from each group of 3 that you would be most likely to purchase.</p>
    </header>
    <body>
        <section class="products"></section>
    </body>
    `;
}

class BusmallApp {
    constructor() {
        this.products = productsApi.getAll();
        this.totalRounds = 0;
    }
    
    render() {
        const dom = makeTemplate();
        this.list = dom.querySelector('section');
        
        const productDisplay = new ProductDisplay(this.products, product => {
            console.log('total rounds', this.totalRounds);
            this.totalRounds++;
            product.clicks++;
            surveyApi.add(product);

            if(this.totalRounds === 26) {
                window.location = 'user.html';
            }

            console.log(product);
            productDisplay.showImages();
        }, 

        product => {
            product.views++;
        });
        
        this.list.appendChild(productDisplay.render());
        return dom;
    }
}

const busmallApp = new BusmallApp();

document.getElementById('root').appendChild(busmallApp.render());
