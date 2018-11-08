import html from '../html.js';

let template = function(survey) {
    let name = survey.name;
    let count = survey.count;

    return html`
        <li>${name} had ${count} views</li>
    `;
};

export default class SurveyReport {
    constructor(survey) {
        this.survey = survey;
    }

    render() {
        let dom = template(this.survey);
        return dom;
    }
}