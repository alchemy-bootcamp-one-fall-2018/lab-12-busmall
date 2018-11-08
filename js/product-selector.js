import html from './html.js'; 
import ImageDisplay from './image-display.js'; 

function makeTemplate() {
    return html`
        <ul class="product-selector-list"><ul>
    `;
}

export default class ProductSelector {
    constructor(products, onSelect) {
        this.products = products;
        this.onSelect = onSelect; 
    }
    render(){
        let dom = makeTemplate(); 
        const ul = dom.querySelector('ul'); 

        this.products.forEach(product => {
            let productComp = new ImageDisplay(product, this.onSelect); 
            ul.appendChild(productComp.render()); 
        }); 

        return dom; 
    }
}

