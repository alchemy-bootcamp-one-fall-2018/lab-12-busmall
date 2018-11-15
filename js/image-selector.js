import html from './html.js';
import Image from './image.js';

function makeTemplate() {
    return html`
        <main>
            <h2>This is the Image Selector</h2>
            <ul></ul>
        </main>
    `;
}

export default class ImageSelector {
    constructor(products) {
        this.products = products;
    }

    render() {
        const dom = makeTemplate();
        const imageCardContainer = dom.querySelector('ul');
        const image = new Image();
        imageCardContainer.appendChild(image.render());
        
        return dom;
    }
}