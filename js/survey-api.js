
let surveys = [];

function saveSurveys() {
    localStorage.setItem('surveys', JSON.stringify(surveys));
}

const surveyApi = {
    getAll() {
        const json = localStorage.getItem('surveys');
        if(json) {
            surveys = JSON.parse(json);
        }        
        return surveys;
    },
    add(survey) {
        surveys.push(survey);
        saveSurveys();
    }
};

// we need to call this because in the "add" only case, we won't
// ever load the "saved" surveys
surveyApi.getAll();

export default surveyApi;