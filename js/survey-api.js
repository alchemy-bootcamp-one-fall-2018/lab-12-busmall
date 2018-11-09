
let surveyArray = [];

function saveSurvey() {
    localStorage.setItem('survey', JSON.stringify(surveyArray));
}

const surveyApi = {
    add(survey) {
        surveyArray.push(survey);

        saveSurvey();
    }
};

export default surveyApi;