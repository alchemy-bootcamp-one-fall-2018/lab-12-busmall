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

let template = function(name) {
    return html`
        <li class="survey">
            <h3>${name}</h3>
        </li>
    `;
};

export default class Survey {
    constructor(survey, onSelect) {
        this.survey = survey;
        this.onSelect = onSelect;
    }

    render() {
        let dom = template(this.survey.name);
        
        let li = dom.querySelector('li');
        li.addEventListener('click', () => {
            this.onSelect(this.survey);
        });
        
        return dom;
    }
}