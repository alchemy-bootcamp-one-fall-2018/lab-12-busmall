// import html from './html.js';
// import productsApi from './products-api.js';

// import surveyApi from './survey-api.js';
// // import productsMaster from './products-master.js';
// import productSelector from './product-selector.js';
//const products = productsApi.getAll();
// console.log(products);

// marty's flowchart says this should get into from products-api and survey-api
// as well as passing info back to them.
// also it should pass info down to productSelector (products, onSurvey).

import html from './html.js';
import productsApi from './products-api.js';
import ProductSelector from './product-selector.js';
import productDisplay from './product-display.js';

const products = productsApi.getAll();

function makeTemplate() {
    return html`
    <header class="products-section">
        Products here
    </header>
`;
}

class ImageApp {
    render() {
        const dom = makeTemplate();
        const productsSection = dom.querySelector('.products-section');
        const productSelector = new ProductSelector(products);

        productsSection.appendChild(productSelector.render());
        return dom;
    }
}

const imageApp = new ImageApp();
document.getElementById('root').appendChild(imageApp.render());

    // }
// }
  
// }





// let template = function() {
//     return html`
//         <h1>Hello World!</h1>
//         <li class="survey">
//          <h3></h3>
//         </li>
//     `;
// // };

// export default class Survey {
//     constructor(survey, onSelect) {
//         this.survey = survey;
//         this.onSelect = onSelect;
//     }

//     render() {
//         let dom = template();
        
//         let li = dom.querySelector('li');
//         li.addEventListener('click', () => {
//             this.onSelect(this.survey);
//         });
        
//         return dom;
//     }
