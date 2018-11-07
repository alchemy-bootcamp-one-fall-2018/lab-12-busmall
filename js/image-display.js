import html from './html.js';

function makeTemplate() {
    return html`
    <section>
    <img id="product-1" class="random-image">
    <img id="product-2" class="random-image">
    <img id="product-3" class="random-image">
    </section>
    `;
}
class ImageDisplay {
    constructor(products, onSelect) {
        this.products = products;
        this.images = [];
        this.onSelect = onSelect;
        this.clicks = 0;
    }
    render() {
        const dom = makeTemplate();
        let image1Clicks = 0;
        const image2Clicks = 0;
        const image3Clicks = 0;

        const image1 = dom.getElementById('product-1');
        const image2 = dom.getElementById('product-2');
        const image3 = dom.getElementById('product-3');

        image1.addEventListener('click', () => {
            image1Clicks++;
        });
        image2.addEventListener('click', () => {
            image2Clicks.clicks++;
        });
        image3.addEventListener('click', () => {
            image3Clicks.clicks++;
        });

        console.log(image1.onSelect);
        this.getImage();
        
        image1.src = `${this.images[0].image}`;
        image2.src = `${this.images[1].image}`;
        image3.src = `${this.images[2].image}`;
        
        console.log(image1Clicks);
        return dom;
    }

    getImage() {
        for(let i = 0; i < 3; i++) {
            let lastNumber = 0;
            let index = Math.floor(Math.random() * 19);
            if(index !== lastNumber) {
                this.images.push(this.products[index]);
            } else {
                index = Math.floor(Math.random() * 19);
                this.images.push(this.products[index]);
            }
            lastNumber = index;
        }
    }

    onSelect() {

    }
}

export default ImageDisplay;