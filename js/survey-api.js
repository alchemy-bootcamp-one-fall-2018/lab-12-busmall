let survey = [];

function saveSurvey() {
    localStorage.setItem('survey', JSON.stringify(survey));
}
const surveyApi = {

   
    get() {
        const json = localStorage.getItem('survey');
        if(json) {
            survey = JSON.parse(json);
        }
        return survey;
    }, 


    add(product) {

        const itemChoice = survey.find(item => {
            return item.name === product.name;
        });
        if(itemChoice) {
            itemChoice.quantity++;
        }
        else {
            survey.push({
                name: product.name,
                quantity: 1
            });
        }

        saveSurvey();
    }
    
};

export default surveyApi; 