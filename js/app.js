import html from './html.js';
import productsApi from './products-api.js';
import Image from './image.js';

const products = productsApi.getAll();
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

    constructor(products) {
        this.products = products;

    }
    render() {
        const dom = makeTemplate();
        this.list = dom.querySelector('ul');
        
        for(let i = 0; i < 3; i++) {
            const image = new Image(products);
            this.list.appendChild(image.render());
            
        }
        
        return dom;
    }
}
const imageApp = new ImageApp();
const root = document.getElementById('root');
root.appendChild(imageApp.render());

 