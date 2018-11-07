import html from './html.js';
import productsApi from './products-api.js';
import surveyApi from './survey-api.js';

let products = productsApi.getAll();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


let display = [];

while(display.length < 3) {
    let index = getRandomInt(products.length); 
    if(display.includes(products[index]) === false) {
        display.push(products[index]);
    } 
}



//creating template and what gets placed in template
function makeTemplate() {
    return html`
        <h1> Survey page </h1>

        <section>
        <div> <img src="${display[0].image}" id="imageOne"> </div>
        <div> <img src="${display[1].image}" id="imageTwo"> </div>
        <div> <img src="${display[2].image}" id="imageThree"> </div>
        </section>

    `;
}


// class that calls the template and renders it aka inits it
class Header {
    render() {
        const dom = makeTemplate();
        return dom;
    }
}

export default Header;



// event listener for on click of image
const itemList = document.getElementById('root');


const surveyInfo = {
    init(survey) {
        for(let i = 0; i < survey.length; i++){
            const dom = makeTemplate(survey[i]);
            dom.addEventListener('click', function() {
                surveyApi.add(survey[i]);
                survey.update(survey);
            }); 

            itemList.appendChild(dom);
        }
    },
    update(survey) {
        while(itemList.lastElementChild) {
            itemList.lastElementChild.remove();

        }
        surveyInfo.init(survey);
    }
};



