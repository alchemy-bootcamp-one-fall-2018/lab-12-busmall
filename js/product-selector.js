// import surveyApi from './survey-api.js';
// import productsApi from './products-api.js';
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
    }
    add(product) {
        const productDisplay = new ProductDisplay(product, this.products, this.onSelect);
        this.productsList.appendChild(productDisplay.render());
    }
    render() {
        const dom = makeTemplate();
        this.productsList = dom.querySelector('div');

        for(let i = 0; i < this.products.length; i++) {
            this.add(this.products[i]);
        }

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
