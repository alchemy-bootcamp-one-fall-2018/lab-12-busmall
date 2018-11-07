import productApi from './product-api.js';
// import surveyApi from './survey-api.js';
// import ProductList from './product-list.js';
import html from './html.js';
import ImageDisplay from './image-display.js';
// import ClickVote from './click-vote.js';

const products = productApi.getAll();
const imageDisplay = new ImageDisplay(products);


function makeTemplate() {
    return html`
    <main>
        <section>
            <h2>Marketing Survey</h2>
            <ul id="product">
                <img src="">
            </ul>
        </section>

        <section id="vote">
        </section>
    </main>

    `;

}

class ProductApp {
    render() {
        const dom = makeTemplate();

        const productDisplay = dom.getElementById('product');
        // const voteSection = dom.getElementById('vote');

        // const productList = new ProductList(products, product => {
        //     products.getAll(product);
        // });

        productDisplay.appendChild(imageDisplay.render());

        return dom;
    }
}

const app = new ProductApp();
document.getElementById('root').appendChild(app.render());