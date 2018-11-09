let surveyArray = [];


function saveSurvey() {
    localStorage.setItem('surveyArray', JSON.stringify(surveyArray));
}

const surveyApi = {
    add(survey) {

        console.log('api surbey', survey);
        
        surveyArray.push(survey);

        saveSurvey();        
    }
};

export default surveyApi; 