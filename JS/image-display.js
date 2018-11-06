import productApi from 'js/product-api.js';
import html from 'js/html.js';

let products = productApi.getAll();

function makeTemplate() {
    return html `
    <section>
        <div>
        <img id="product1" src=$() >
        </div>

        <div>
        <img id="product2" src=$() >
        </div>

        <div>
        <img id="product2" src=$() >
        </div>

    </section>
    
    `;
}

class ImageDisplay {
    constructor(products){
        this.products = products;
        this.randomImages = [];
    }
}
    render() {

        // const imageSelection = document.getElementById('')
        const dom = makeTemplate();

        const product1 = dom.querySelector(#product1);
        const product2 = dom.querySelector(#product2);
        const product3 = dom.querySelector(#product3);

        dom.addEventListener('click', event => {

            event.preventDefault();

            //display image events

            for(let i = 0; i < 3; i ++){
                const index = Math.floor(Math.random() * 19);
                this.products = randomImages[index];

        
            }


        })

    }

    export default ImageDisplay;