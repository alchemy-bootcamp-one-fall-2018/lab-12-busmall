
import html from './html.js';


import productApi from '../data-apis/product-api.js';
import ProductSelector from './product-selector.js';

const products = productApi.getAll();

function makeTemplate() {
    return html`
        <h2>This lab hurts</h2>
        <ul></ul>
        `;
}
        
class SurveyApp {
    render() {
        
        const dom = makeTemplate();
        const list = dom.querySelector('ul');
        const productSelector = new ProductSelector(products);
        list.appendChild(productSelector.render());
        
        return dom;
    }
}

const surveyApp = new SurveyApp();
const root = document.getElementById('root');
root.appendChild(surveyApp.render());


// let productSelector = new productSelector(this.products, prodcut => {
//     product.count ++;
//     this.total
// }