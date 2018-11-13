import html from './html.js';
import surveyApi from '../api/survey-api.js';
import SurveyChart from '../js/survey-chart.js';

function makeTemplate() {
    return html`
        <header>
            <div>
                <h1>BusMall</h1>
            </div>
            <nav>
                <a href="./">Home</a>
            </nav>
        </header>
        <main> 
            <section>  
                <h2>Product Survey</h2>
            </section>
            <section class="survey-chart"></section>
        </main>`;
}

export default class ReportApp {
    constructor() {
        this.surveyData = surveyApi.getAll();
    }

    render() {
        const dom = makeTemplate();

        const chartSection = dom.querySelector('.survey-chart');
        const chart = new SurveyChart(this.surveyData);
        chartSection.appendChild(chart.render());

        return dom;
    }
}

const app = new ReportApp();
const root = document.getElementById('root');
root.appendChild(app.render());