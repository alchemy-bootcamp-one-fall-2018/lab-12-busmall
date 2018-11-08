import html from './html.js';
import Product from './product.js';

function makeTemplate() {
    return html`
        <ul class="products"></ul>
    `;
}

function getRandomIndex(length) {
    return Math.floor(Math.random() * length);
}
class ProductSelector {
    constructor(products){
        this.products = products;
        this.survery = products.map(product => {
            return {
                name: product.name,
                image: product.image,
                views: 0,
                clicks: 0
            };
        });
        this.imagesPer = 3;

    } 
    get RandomProducts() {
        const copy = this.survery.slice();
        const randomProducts = [];

        for(let i = 0; i < this.imagesPer; i++){
            const index = getRandomIndex(copy.length);
            const product = copy[index];
            copy.splice(index, 1);
            randomProducts.push(product);
            product.views++;
        }
        return randomProducts;
    }

    showRandomProducts() {
        const randomProducts = this.getRandomProducts();
        randomProducts.forEach(product => {
            const productCard = new Product(product, selected => {
                selected.clicks++;
                this.clearProducts();
                this.showRandomProducts();
                

            });
            this.list.appendChild(productCard.render());
        }
        );
    }


    clearProducts() {
        while(this.list.lastElementChild) {
            this.list.lastElementChild.remove();
        }
    }
    render() {
        const dom = makeTemplate();
        this.list = dom.querySelector('ul');
        this.showRandomProducts();
        
        
        return dom;
    }
}

export default ProductSelector;



// class {
//     render(){
//         const dom = makeTemplate();
//         comst ProductContainer = dom.querySelector('product-container');

//         let display = getProducts();
//         for(var i = 0; i < display.length; i++) {
//             const product = new Product(display[i], selected => {
//                 this.renderProducts
//             }

//         });
//         this.productContainer.appendChild(image.render());
//     }
// }

// export default ProductSelector;