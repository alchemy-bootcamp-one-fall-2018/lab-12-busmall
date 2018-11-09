import html from './html.js';
import ImageDisplay from './image-display.js';

function makeTemplate() {
    return html`
        <ul class="image-display"></ul>
    `;
}

export default class ImageSelector {

    constructor(products, onSelect) {
        this.products = products;
        this.onSelect = onSelect;
    }

    showImages() {
        for(let i = 0; i < 3; i++) {
            const product = this.products[i];
            const imageDisplay = new ImageDisplay(product, function(data){
                // eslint-disable-next-line no-console
                console.log('data', data);
            });
            this.list.appendChild(imageDisplay.render());
        }
    }

    render() {
        let dom = makeTemplate();
        this.list = dom.querySelector('ul');
        this.showImages();

        
        return dom;

        
    }
}

//next steps 11/7
// for loop logic to randomize images should go in render

// for(let i = 0; i < 3; i++) {
//     let index = this.showImages();
//     let imageDisplay = new ImageDisplay(this.products[index], this.onSelect);
//     console.log('hello', imageDisplay);
// }