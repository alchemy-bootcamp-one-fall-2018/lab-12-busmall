import productsApi from './products-api.js';
const products = productsApi.getAll();
let surveyResults = [];

const survey = products.map(product => {
    return {
        name: product.name,
        img: product.img,
        views: 0,
        clicks: 0
    };
});

function saveResults(banana) {
    localStorage.setItem('results', JSON.stringify(banana));
}

const surveyApi = {
    
    add(clickedPicture) {
        if(surveyResults.length === 0) {
            saveResults(survey);
            for(let i = 0; i < survey.length; i++) {
                surveyResults.push(survey[i]);
            }
            // console.log('string if');
        } else {
            console.log('else');
            for(let i = 0; i < surveyResults.length; i++) {
                // saveResults(survey);
                // console.log('for', surveyResults[i].name);
                // console.log('for', clickedPicture.name);
                if(surveyResults[i].name === clickedPicture.name) {
                    surveyResults[i].clicks++;
                    console.log(surveyResults[i].clicks);
                    saveResults(surveyResults);
                }
            }
        }
    }
};

export default surveyApi;