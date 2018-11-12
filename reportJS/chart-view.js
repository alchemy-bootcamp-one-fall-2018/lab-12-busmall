import html from '../js/html.js';

function makeTemplate() {
    return html`
    <h2> Survey Data </h2>
    <div class="chart-container">
        <canvas width="400"> </canvas>
    </div>
    `;
}

export default class SurveyChart {
    constructor(surveyData) {
        this.surveyData = surveyData;
    }
    render() {
        let dom = makeTemplate();
        const canvas = dom.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        let labels = [];
        let data = [];
        let views = [];
        for(let i = 0; i < this.surveyData.length; i++) {
            const survey = this.surveyData[i]; 
            labels.push(survey.name);
            data.push(survey.count);
            views.push(survey.view);
        }
        console.log('data', data);
        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels, 
                datasets: [{
                    labels: 'Number of Clicks', 
                    data: data,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    labels: 'Number of views', 
                    data: views,
                    backgroundColor: 'rgba(54, 180 , 180, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            }, 
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
        return dom;
    }
}