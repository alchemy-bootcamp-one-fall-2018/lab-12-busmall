import html from './html.js';

let template = function(name) {
    return html`
        <li class="image">
            <a href="#">${name}</a>
        </li>
    `;
};

export default class Product {
    constructor(product, onSelect) {
        this.product = product;
        this.onSelect = onSelect;
    }

    render() {
        let dom = template(this.product.name);
        
        let li = dom.querySelector('li');
        li.addEventListener('click', () => {
            this.onSelect(this.product);
        });
        
        return dom;
    }
}