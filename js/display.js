import html from './html.js';

function makeTemplate(product) {
    return html`
        <li class="image">
            <h4 class="product-name">${product.name}</h4>
            <img src="assets/product-api.js/${product.image}">
        </li>
    `;
}
