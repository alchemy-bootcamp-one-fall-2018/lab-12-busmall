import html from './html.js';

function makeTemplate(product) {
    return html`
        <li>
            <img src="./${product.image}" class="product">
        </li>
    `;
}

class Image {
    constructor(product) {
        this.product = product;
    }
    render() {
        const dom = makeTemplate(this.product);
        return dom;
    }
}

export default Image;