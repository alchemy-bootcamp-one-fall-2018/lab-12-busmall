import html from './html.js';
import ImageSelector from './product-selector.js';
import productsApi from './products-api.js';

function makeTemplate() {
    return html`
        <main>
            <section class="image-display"></section>
        </main>
    `;
}

export default class App {
    constructor() {
        this.images = productsApi.getAll();
        this.totalCount = 0;
    }

    render() {
        let dom = makeTemplate();

        let imageDisplay = dom.querySelector('.image-display');

        let firstImage = this.images[0];
        let image = new ImageSelector(firstImage);
        imageDisplay.appendChild(image.render());


        return dom;
    }
}

