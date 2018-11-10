import html from '../html.js';
import surveyApi from '../survey-api.js';


function makeTemplate() {
    return html`
        <main>
            Report Summary
        </main>
    `;
}

export default class ReportApp {
    constructor() {
        this.surveyData = surveyApi.getAll();
    }
    render() {
        const dom = makeTemplate();
        
        // console.log('survey data', surveyApi);
        return dom;
    }
}