// import surveyApi from './survey-api.js';
// import productsApi from './products-api.js';


// products in
// onSurvey in

// const survey = productsApi.index(i)
// const index = {
//     function getRandomInt(min, max) {
//             min = Math.ceil(0);
//             max = Math.floor(19);
//             return Math.floor(Math.random() * (19 - 0)) + min;
//       }
// };

// export default productSelector;

//////////////////

import html from '../html.js';
import Survey from './survey-app.js';

function makeTemplate() {
    return html`
        <ul class="survey-list"></ul>
    `;
}

export default class productSelector {
    constructor(survey, onSelect) {
        this.survey = survey;
        this.onSelect = onSelect;
    }

    render() {
        let dom = makeTemplate();
        const ul = dom.querySelector('ul');

        this.survey.forEach(survey => {
            let surveyComp = new Survey(survey, this.onSelect);
            ul.appendChild(surveyComp.render());
        });
        
        return dom;
    }
}
