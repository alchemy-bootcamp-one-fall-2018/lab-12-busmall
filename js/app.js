import html from './html.js';
import productsApi from './products-api.js';
import ProductSelector from './product-selector.js';

function makeTemplate() {
    return html`
    <header>
        <h1>BusMall: Focus Group Survey</h1>
    </header>
        <nav>
            <a href="./index.html"> Home </a>
            <br>
            <a href="#"> Report </a>
        </nav>
    <main>
    <div id="details">
        Select the product your prefer:
    </div>
        <section class="products-container">
        </section>
    </main>
            <form id="next-slide">
        <button id="vote-button">Next</button>
            </form>
    <hr>`;
}

export default class App {
    constructor() {
        this.products = productsApi.getAll();
        this.totalCount = 0;
    }

    render() {
        let dom = makeTemplate();

        let productSelector = new ProductSelector(this.products, product => {
            product.count++;
            this.totalCount++;
            productsApi.save();
        });

        let selectorSection = dom.querySelector('.products-container');
        selectorSection.appendChild(productSelector.render());


        return dom;
    }
}