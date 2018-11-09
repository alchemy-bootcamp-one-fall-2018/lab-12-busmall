import html from '../js/html.js';

function makeTemplate() {
    return html`
    <h1> Survey Data </h1>
    <div class="chart-container">
        <canvas width="400"> </canvas>
    </div>
    `;
}

export default class SurveyChart {
    constructor(results) {
        this.results = results;
    }
    render() {
        let dom = makeTemplate();
        const canvas = dom.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        let labels = [];
        let data = [];
        for(let i = 0; i < this.results.length; i++) {
            const survey = this.results[i]; 
            labels.push(survey.name);
            data.push(survey.count);
        }
        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels, 
                dataset: [{
                    labels: 'Number of Clicks', 
                    data: data,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
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