import html from './html.js';
import ProductDisplay from './product-display.js';

// products in
// onSurvey in

function makeTemplate() {
    return html`
        <div class="random-product">
        </div>
    `;
}

class ProductSelector {
    constructor(products, onSelect) {
        this.products = products;
        this.onSelect = onSelect;
        this.lastThree = [];
    }

    getRandomIndex(arrayLength) {
        return Math.floor(Math.random() * arrayLength); 
    }

    getTrio() {
        const randomProduct = []; 
        const products = this.products;

        for(let i = 0; i < 3; i++) {
            const nouveauIndex = this.getRandomIndex(products.length);

            const product = products[nouveauIndex];
            if(randomProduct.includes(product) || this.lastThree.includes(product)) {
                i--;
//                console.log('dupl');
            } else {
                for(let j = 0; j < 25; j++) {
                    randomProduct.push(products[nouveauIndex]);

                    // product.views++;
                    // console.log('one turn', product.views);
                    // break;
                }
            }
        }

        // view count, repeat 25x then new message and new button "click to view" new pg 
        // with message w/counts in it
        this.lastThree = randomProduct;
     //   console.log('last three', this.lastThree);
        return randomProduct;
    }
    displayRandomThree() {
        const randomProduct = this.getTrio();
        randomProduct.forEach(product => {
            const productDisplay = new ProductDisplay(product, this.onSelect);
            this.productsList.appendChild(productDisplay.render());
            // product = productDisplay.product;
            // product.views++;
            // console.log('views', product.views);
        });
    }

    render() {
        const dom = makeTemplate();
        this.productsList = dom.querySelector('div');
        this.displayRandomThree();
        // for(let i = 0; i < this.products.length; i++) {
        //     this.add(this.products[i]);
        // }

        return dom;
    }
}

export default ProductSelector;

// const survey = productsApi.index(i)
// const index = {
//     function getRandomInt(min, max) {
//             min = Math.ceil(0);
//             max = Math.floor(19);
//             return Math.floor(Math.random() * (19 - 0)) + min;
//       }
// };



//////////////////


// import Survey from './survey-app.js';

// function makeTemplate() {
//     return html`
//         <ul class="survey-list"></ul>
//     `;
// }

// export default class productSelector {
//     constructor(survey, onSelect) {
//         this.survey = survey;
//         this.onSelect = onSelect;
//     }

//     render() {
//         let dom = makeTemplate();
//         const ul = dom.querySelector('ul');

//         this.survey.forEach(survey => {
//             let surveyComp = new Survey(survey, this.onSelect);
//             ul.appendChild(surveyComp.render());
//         });
        
//         return dom;
//     }
// }
