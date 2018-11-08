import productApi from './product-api.js';

const surveyApi = {

    init(){
        if(this.getDisProds()){
            this.storeDisProd(this.getDisProds());
        } else {
            this.storeDisProd(productApi.getAll());
        }
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
    },

    storeDisProd(newProducts) {
        localStorage.setItem('disProds', JSON.stringify(newProducts));
    },

    getDisProds() {
        return JSON.parse(localStorage.getItem('disProds'));
    },

    storeSession(session) {
        localStorage.setItem('session', JSON.stringify(session));
    },

    getSession() {
        return JSON.parse(localStorage.getItem('session'));
    }
};

export default surveyApi;