import html from '../js/html.js';

function makeTemplate() {
    return html`
        <h2>Chart</h2>
        <div class="chart-container">
            <canvas width="400"></canvas>
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

        for (let i = 0; i < this.results.length; i++) {
            const survey = this.results[i];
            labels.push(survey.clicks);
            data.push(survey.views);
        }
        
        this.chart = new Chart(ctx, {
            type: 'bar',
            labels: labels,
            datasets: [{
                label: '# of views',
                data: data,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        });
    return dom;    
    }
}