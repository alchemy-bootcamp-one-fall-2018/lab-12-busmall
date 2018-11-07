
let surveys = [];

function saveSurvey() {
    localStorage.setItem('surveys', JSON.stringify(surveys));
}

const surveyApi = {
    add(survey) {
        // 1. add to our array
        survey.push(survey);
        // 2. save array to localStorage
        saveSurvey();
    }
};

export default surveyApi;