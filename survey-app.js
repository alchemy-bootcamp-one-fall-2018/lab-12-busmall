// import surveyApi from './survey-api.js';
import productsApi from './products-api.js';
import ImageDisplay from './image-display.js';
import html from './html.js';

let products = productsApi.getAll();

function makeTemplate() {
    return html`
    <h1>Busmall Products Survey</h1>
    <p>Please pick one image from each group of 3 that you would be most likely to purchase.</p>
    <ul class="products"></ul>
    `;
}

class BusmallApp {
    constructor(products, onSelect) {
        this.products = products;
        this.onSelect = onSelect;
    }
    
    render() {
        const dom = makeTemplate();
        this.list = dom.querySelector('ul');

        
        
        for(let i = 0; i < 3; i++) {
            const imageDisplay = new ImageDisplay(products, this.onSelect);
            this.list.appendChild(imageDisplay.render()); 
        }
        
        return dom;
    }

    // add(products) {
        
    // }
}

const busmallApp = new BusmallApp();

document.getElementById('root').appendChild(busmallApp.render());
