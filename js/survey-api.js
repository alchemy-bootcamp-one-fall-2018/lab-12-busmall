const surveyApi = {

    init(){
        // this.store([]);
    },

    store(newSurveys) {
        let surveys = JSON.parse(localStorage.getItem('surveys'));

        if(surveys){
            surveys.push(newSurveys);
        } else {
            surveys = [newSurveys];
        }
        localStorage.setItem('surveys', JSON.stringify(surveys));
    },

    getSurveys() {
        return JSON.parse(localStorage.getItem('surveys'));
    }
};

export default surveyApi;