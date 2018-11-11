import productsApi from './products-api.js';
import html from './html.js';
import ProductCard from './product-card.js';

let products = productsApi.getAll();


function makeTemplate() {
    return html `
        <div id="products"></div>
    `;
}

function getRandomIndex(length) {
    return Math.floor(Math.random() * length);
}

function makeThreePictures(copy) {

    function getRandomImg() {
        const index = getRandomIndex(copy.length);
        const product = copy[index];
        copy.splice(index, 1);
        return product;
    }

    const triad = [
        getRandomImg(),
        getRandomImg(),
        getRandomImg(),
    ];
    return triad;
}

export default class Survey {
    constructor() {
        this.votes = 0;
    }
    render() {
        let dom = makeTemplate();
        this.productsContainer = dom.getElementById('products');
        this.showProducts();
        return dom;
    }

    showProducts() {
        const survey = products.map(product => {
            return {
                name: product.name,
                img: product.img,
                views: 0,
                clicks: 0
            };
        });
        const threePictures = makeThreePictures(survey);
        for(let i = 0; i < 3; i++) {
            const productCard = new ProductCard(threePictures[i], () => {
                this.votes++;
                if(this.votes === 25) {
                    window.location.href = './../user-summary.html';
                }
                this.productsContainer.innerHTML = '';
                this.showProducts();
            });
            this.productsContainer.appendChild(productCard.render(threePictures[i]));
        }
        
    }
}

