import productApi from './product-api.js';
import html from './html.js';

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
    render() {

        // const imageSelection = document.getElementById('')
        const dom = makeTemplate(this.products);


        const product1 = dom.getElementByID('product1');
        const product2 = dom.getElementByID('product2');
        const product3 = dom.getElementByID('product3');

        // product1.src = `$[]`
        // product2.src = `$[]`
        // product3.src = `$[]`

        dom.addEventListener('click', event => {

            event.preventDefault();

            //display three images

            for(let i = 0; i < 3; i ++){
                const index = Math.floor(Math.random() * 19);
                this.products = [index];
                this.randomImages.push(products);  
         
                  
            }



        });

    }
}


export default ImageDisplay;