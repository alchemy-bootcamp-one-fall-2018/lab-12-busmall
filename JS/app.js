import productApi from './product-api.js';
import ImageSelector from './image-selector.js';
import html from './html.js';
import surveyApi from './survey-api.js';


function makeTemplate() {
    return html`
    <header> Please select the most appealing product :) </header>
    
    <main>
        <section class="product-selector"></section>
        <ul class="products"></ul>
        <section class="update"></section>
    </main>
    `;
}


export default class App {
    constructor(products, onSelect) {
        this.onSelect = onSelect;
        this.products = productApi.getAll();
        this.totalCount = 0;
    }

    render() {
        
        const dom = makeTemplate();
        this.list = dom.querySelector('ul');

        let imageSelector = new ImageSelector(this.products, product => {
            const index = this.products.indexOf(product);
            this.products[index].clicks++;
            surveyApi.add(product);
            this.totalCount++;
            imageSelector.update();
            if(this.totalCount === 25) {
                surveyApi.saveProducts();
                window.location.replace('./report.html');
                // window.location.replace('./user-summary.html');
            }
            
        });

        this.list.appendChild(imageSelector.render());
        return dom;
    }
}

const productApp = new App();
document.getElementById('root').appendChild(productApp.render());


