import html from './html.js';
import productsApi from './products-api.js';
import Image from './image.js';

const products = productsApi.getAll();

const survey = products.map(product => {
    return {
        name: product.name,
        image: product.image,
        clicks: 0,
        views: 0
    };
});

function makeTemplate() {
    return html`
        <header></header>
        <main>
            <h2>Products</h2>
            <ul class="main"></ul>
        </main>
    `;
}

class ImageApp {
    constructor() {
        this.products = products;
        this.survey = survey;
    }

    getRandomIndex(arrayLength) {
        return Math.floor(Math.random() * arrayLength);
    }

    getRandomImages() {
        const survey = this.survey.slice();
        const randomImages = [];
        for(let i = 0; i < 3; i++) {
            const index = this.getRandomIndex(this.survey.length);
            const image = survey[index];
            
            if(randomImages.includes(image)) {
                i--;
                continue;
            }
            randomImages.push(image);
        }
        return randomImages;
    }

    showRandomImages() {
        const randomImages = this.getRandomImages();
        for(let i = 0; i < 3; i++) {
            const product = randomImages[i];
            const image = new Image(product);
            this.list.appendChild(image.render());
        }
    }
    
    render() {
        const dom = makeTemplate();
        this.list = dom.querySelector('ul');
        this.showRandomImages();
        return dom;
    }
}

const imageApp = new ImageApp();
const root = document.getElementById('root');
root.appendChild(imageApp.render());

 