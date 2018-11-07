// import productApi from './product-api.js';
import html from './html.js';


function makeTemplate() {
    return html`
    <section>
        <div>
        <img id="product1">
        </div>

        <div>
        <img id="product2">
        </div>

        <div>
        <img id="product3">
        </div>

    </section>
    
    `;
}

class ImageDisplay {
    constructor(products){
        this.products = products;
        this.randomImages = [];
    }
    render() {
        // console.log('hola', products);
        const dom = makeTemplate();
    
        console.log(dom)

        const product1 = dom.getElementById('product1');
        const product2 = dom.getElementById('product2');
        const product3 = dom.getElementById('product3');

        this.getImage();

        //render the three random images
        product1.src = `${this.randomImages[0].image}`;
        product2.src = `${this.randomImages[1].image}`;
        product3.src = `${this.randomImages[2].image}`;

        //event listeners for click

        product1.addEventListener('click', () => {
            product1.views++;
            product1.clicks++;
        });

        product2.addEventListener('click', () => {
            product2.views++;
            product2.clicks++;
        });

        product3.addEventListener('click', () => {
            product3.views++;
            product3.clicks++;
        });

        return dom;
    }

    getImage() {
        for(let i = 0; i < 3; i++) {
            const index = Math.floor(Math.random() * 19);
            this.randomImages.push(this.products[index]);
        }
    }
}
        
          
export default ImageDisplay;