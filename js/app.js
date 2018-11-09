import html from './html.js';
import productsApi from './products-api.js';
import ProductSelector from './product-selector.js';

const products = productsApi.getAll();

function makeTemplate() {
    return html`
    <section class="image-section">
        <h2>App Focus Group Product List</h2>

    </section>
`;
}

class App {
    render() {
        const dom = makeTemplate(); 
 
        const productSelectorOnApp = dom.querySelector('.image-section');
        const productSelector = new ProductSelector(products);
        productSelectorOnApp.appendChild(productSelector.render());

        return dom;
    }
}

function getThree() {
    var copy = products.slice();
    function getRandomProduct() {
        var index = getRandomIndex(copy.length);
        var product = copy[index];
        copy.splice(index, 1);
        
        return product;
    }
    
    var three = [
        getRandomProduct(),
        getRandomProduct(),
        getRandomProduct()
    ];

    return three;
}

console.log(getThree());

var productItem = document.querySelectorAll('three');
for(var i = 0; i < productItem.length; i++) {
    var li = productItem[i];
    var threeToDisplay = threeToDisplay
}

getThree()

function getRandomIndex(length) {
    return Math.floor(Math.random() * length);
}


const app = new App();
document.getElementById('root').appendChild(app.render());