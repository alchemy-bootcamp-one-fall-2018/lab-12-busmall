import html from './html.js';

function makeTemplate() {
    return html`
        <img id="image-1">
        <img id="image-2">
        <img id="image-3">
    `;
}

class ProductDisplay {
    constructor(products) {
        this.products = products;
    }

    render() {
        const dom = makeTemplate();
        this.image1 = dom.querySelector('#image-1');
        this.image2 = dom.querySelector('#image-2');
        this.image3 = dom.querySelector('#image-3');
        this.image1.src = '../../assets/bag.jpg';
        this.image2.src = '../../assets/banana.jpg';
        this.image3.src = '../../assets/bathroom.jpg';

        return dom;
    }

}


export default ProductDisplay;