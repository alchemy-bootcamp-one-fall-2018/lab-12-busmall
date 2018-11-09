import html from './html.js';

function makeTemplate(image) {
    return html`
        <img class="pic" src="${image.image}">
    `;
}

class ProductCard {
    constructor(image) {
        this.image = image;
       
    }

    render() {
        const dom = makeTemplate(this.image);
        
        
        
        return dom;
    }
}

export default ProductCard;