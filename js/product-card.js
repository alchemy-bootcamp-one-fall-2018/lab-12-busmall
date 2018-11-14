import html from './html.js';

function makeTemplate(product) {
    return html `
    <div id="three-pictures">
        <p id="name">${product.name}</p>
        <img src="/${product.img}" style="height: 200px">
    </div>
    `;
}

export default class ProductCard {
    constructor(product, onSelect) {
        this.onSelect = onSelect;
        this.name = product.name;
        this.image = product.img;
        this.clicks = product.clicks;
        this.views = product.views;
    }
    render(product) {
        let dom = makeTemplate(product);
        const clickPicture = dom.querySelector('div');

        clickPicture.addEventListener('click', () => {
            this.onSelect(this.product);
        });
        return dom;
    }
}
