import html from './html.js';

function makeTemplate() {
    return html`
        <li>
            <img class="product">
        </li>

    `;

}

class Image {

    constructor(products) {
        this.products = products;
        this.randomImages = [];
    }
    render() {
        this.getImage();

        const dom = makeTemplate();
        const listItem = dom.querySelector('img');

        for(let i = 0; i < 3; i++) {
            listItem.src = this.randomImages[i].image;
            this.randomImages[i].views++;
        }
        return dom;
    }
    getImage() {
        for(let i = 0; i < 3; i++) {
            const index = Math.floor(Math.random() * 19);
            this.randomImages.push(this.products[index]);
        }
    }
}

export default Image;