import html from './html.js';

function makeTemplate(image) {
    return html`
        <img class="pic" src="${image.image}">
    `;
}

class ProductCard {
    constructor(image, onSelect) {
        this.image = image;
        this.onSelect = onSelect;
    }
    
    render() {
        const dom = makeTemplate(this.image); 
        const image = dom.querySelector('.pic');
        
        image.addEventListener('click', () => {
            this.onSelect(this.image);
        });

        return dom;
    }
}

export default ProductCard;