// product selector, display images

import html from './html.js'; 

function makeTemplate() {
    return html`
    <section>
        <div>
        <img id="product-1">
        </div>
        <div>
        <img id="product-2">
        </div>
        <div>
        <img id="product-3">
        </div>
    </section>
    `; 
}

class ProductDisplay {

    constructor(products) {
        this.products = products; 
        this.randomProducts = []; 
    }

    render() {
    
        const dom = makeTemplate(); 



        const image1 = dom.getElementById('product-1');
        const image2 = dom.getElementById('product-2');
        const image3 = dom.getElementById('product-3');

        image1.addEventListener('click', () => {
            image1.views++;
            image1.clicks++; 

        }); 
        
        image2.addEventListener('click', () => {
            image2.views++;
            image2.clicks++;
        }); 
        image3.addEventListener('click', () => {
            image3.views++; 
            image3.clicks++; 
        }); 
        
        this.getProduct(); 
        
        image1.src = `${this.randomImages[0].image}`;
        image2.src = `${this.randomImages[1].image}`;
        image3.src = `${this.randomImages[2].image}`; 

        return dom;
    }

    getImage() {
        for(let i = 0; i < 3; i++) {
            const index = Math.floor(Math.random() * 19);
            this.randomProducts.push(this.products[index]); 
           

        }
    } 
}

export default ProductDisplay; 