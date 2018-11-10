
const surveyApi = {
    getAll() {
        const json = localStorage.getItem('saveSurvey');
        if(json) {
            return JSON.parse(json);
        }
    },
    add(survey) {
        return survey;
    }
};

export default surveyApi;