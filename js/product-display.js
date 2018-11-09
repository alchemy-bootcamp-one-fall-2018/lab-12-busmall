import html from './html.js';

function makeTemplate(product) {
    return html`
        <li class="product-item">
            <h1>${product.name}</h1>
            <button onclick="select"><img src="assets/${product.image}"></button>
        </li>
  `;      
}

// let viewedSelector = new viewedSelector this.vieweds => {
//     viewedSelector.count++;
//     this.viewedCount++;
//     // ?????userSummary?????.update(viewed);
// }

// let clickedSelector = new clickedSelector this.clickeds => {
//     clickedSelector.count++;
//     this.clickedCount++;
//     // ?????userSummary?????.update(displayed);
// }

class ProductDisplay {
    constructor(product, onSelect) {
        this.product = product;
        this.onSelect = onSelect;
    }

    render() {
        const dom = makeTemplate(this.product);
        const listItem = dom.querySelector('li');
        const product = this.product;

        if(this.onSelect) {
            listItem.addEventListener('click', () => {
                this.onSelect(product);
            });
        }

        return dom;
    }
}

export default ProductDisplay;