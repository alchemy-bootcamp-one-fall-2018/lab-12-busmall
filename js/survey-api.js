let survey = [];

const surveyApi = {
    saveSurvey(survey) {
        localStorage.setItem('survey', JSON.stringify(survey));
    },

    getAll() {
        const json = localStorage.getItem('survey');
        if(json) {
            survey = JSON.parse(json);
        }
        return survey;
    }
};

export default surveyApi;
