let survey = [];

const surveyApi = {
    getAll() {
        const json = localStorage.getItem('saveSurvey');
        if(json) {
            return survey;
        }
    },

    add(survey) {
        return survey;
    }
};

export default surveyApi;