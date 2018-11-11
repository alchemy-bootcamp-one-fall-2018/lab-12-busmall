import productsApi from './products-api.js';
import html from './html.js';
import ProductCard from './product-card.js';

let products = productsApi.getAll();
const survey = products.map(product => {
    return {
        name: product.name,
        image: product.img,
        views: 0,
        clicks: 0
    };
});

function makeTemplate() {
    return html `
        <div id="products"></div>
    `;
}

function getRandomIndex(length) {
    return Math.floor(Math.random() * length);
}

function makeThreePictures() {
    let copy = products.slice();

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
    render() {
        let dom = makeTemplate();
        const productsContainer = dom.getElementById('products');
        const threePictures = makeThreePictures();
        for(let i = 0; i < 3; i++) {
            const productCard = new ProductCard(threePictures[i]);
            productsContainer.appendChild(productCard.render(threePictures[i]));
        }
        return dom;
    }
}