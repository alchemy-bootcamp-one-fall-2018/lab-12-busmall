let survey = [];


const surveyApi = {
    saveSurvey() {
        localStorage.setItem('survey', JSON.stringify(survey));
    },



    add(product) {

        const itemChoice = survey.find(item => {
            return item.name === product.name;
        });
        if(itemChoice) {
            itemChoice.count++;
        }
        else {
            survey.push({
                name: product.name,
                count: 1
            });
        }

    }
    
};

export default surveyApi; 