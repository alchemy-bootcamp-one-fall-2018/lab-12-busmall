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
    getAll() {
        const json = localStorage.getItem('results');
        if(json) {
            return JSON.parse(json);
        } else {
            return survey;
        }
    },
    add(clickedPicture) {
        for(let i = 0; i < surveyResults.length; i++) {
            if(surveyResults[i].name === clickedPicture.name) {
                surveyResults[i].clicks++;
                saveResults(surveyResults);
            }
        }
    },
    addView(viewedPicture) {
        if(surveyResults.length === 0) {
            
            for(let i = 0; i < survey.length; i++) {
                if(survey[i].name === viewedPicture.name) {
                    survey[i].views++;
                }
                surveyResults.push(survey[i]);
            }
            saveResults(survey);
        } else {
            for(let i = 0; i < surveyResults.length; i++) {
                if(surveyResults[i].name === viewedPicture.name) {
                    surveyResults[i].views++;
                    saveResults(surveyResults);
                }
            }
        }
    }
};

export default surveyApi;