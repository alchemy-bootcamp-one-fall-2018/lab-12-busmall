import html from './html.js'; 

function makeTemplate(product) {
    return html`
    <li class="product-card">
    <img id="product" src="./assets/${product.image}">
    </li>
    `;

}

class Product {

    constructor(product) {
        this.product = product; 
    }

    render() {
    
        const dom = makeTemplate(this.product); 

        return dom;
    }
}

export default Product;
// selector
    //     const image1 = dom.getElementById('product-1');
    //     const image2 = dom.getElementById('product-2');
    //     const image3 = dom.getElementById('product-3');

    //     image1.addEventListener('click', () => {
    //         image1.views++;
    //         image1.clicks++; 

    //     }); 
        
    //     image2.addEventListener('click', () => {
    //         image2.views++;
    //         image2.clicks++;
    //     }); 
    //     image3.addEventListener('click', () => {
    //         image3.views++; 
    //         image3.clicks++; 
    //     }); 
        
    //     this.getProduct(); 
        
    //     image1.src = `${this.randomImages[0].image}`;
    //     image2.src = `${this.randomImages[1].image}`;
    //     image3.src = `${this.randomImages[2].image}`; 

    //     return dom;
    // }

    // getImage() {
    //     for(let i = 0; i < 3; i++) {
    //         const index = Math.floor(Math.random() * 19);
    //         this.randomProducts.push(this.products[index]); 
           

    
