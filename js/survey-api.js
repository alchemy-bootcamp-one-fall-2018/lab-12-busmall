
function saveSurvey(survey) {
    localStorage.setItem('surveyArray', JSON.stringify(survey));
}


const surveyApi = {
    add(survey) {

        console.log('api surbey', survey);

        saveSurvey(survey);        
    },

    getAll() {
        
        const json = localStorage.getItem('surveyArray');

        return JSON.parse(json);
    }

};

export default surveyApi; 