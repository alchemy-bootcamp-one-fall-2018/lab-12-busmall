import html from './html.js';
import ProductCard from './product-card.js';

function makeTemplate() {
    return html`
        <ul class="products"></ul>
    `;    
}

function getRandomIndex(length) {
    return Math.floor(Math.random() * length); 
}

class ProductDisplay {
    constructor(products) {
        this.products = products;
        this.survey = products.map(product => {
            return {
                name: product.name,
                image: product.image,
                views: 0,
                clicks: 0
            };
        });
        this.imagesPer = 3;
    }

    getRandomProducts() {
        const copy = this.survey.slice();

        const randomProducts = [];

        for(let i = 0; i < this.imagesPer; i++) {
            const index = getRandomIndex(copy.length);
            console.log(index);
            const product = copy[index];
            copy.splice(index, 1);
            randomProducts.push(product);
        } 
        console.log('random products selected', randomProducts);
        return randomProducts;
    }

    showRandomProducts() {
        const randomProducts = this.getRandomProducts();
        randomProducts.forEach(product => {
            const productCard = new ProductCard(product);
            this.list.appendChild(productCard.render());
        }
        );
    }

    clearProduct() {
        while(this.list.lastElementChild()) {
            this.list.lastElementChild.remove();
        }
    }

    render() {
        const dom = makeTemplate();
        this.list = dom.querySelector('.products');
        this.showRandomProducts();
        return dom;
    }

}


export default ProductDisplay;