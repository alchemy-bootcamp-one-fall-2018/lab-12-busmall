import html from './html.js';

function makeTemplate() {
    return html`
        <div class="chart-container">
            <canvas width="400"></canvas>
        </div>
    `;
}

export default class SurveyChart {
    constructor(results) {
        this.results = results;
    }

    render(){
        let dom = makeTemplate();
        const canvas = dom.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        let labels = [];
        let data = [];
        let clicks = [];

        for(let i = 0; i < this.results.length; i++) {
            const survey = this.results[i];
            labels.push(survey.name);
            data.push(survey.views);
            clicks.push(survey.clicks);
        }

        // eslint-disable-next-line no-undef
        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Views',
                        data: data,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Clicks',
                        data: clicks,
                        backgroundColor: 'rgba(130, 39, 39, 0.2)',
                        borderColor: 'rgba(56, 16, 16, 1)',
                        borderWidth: 1
                    },
                ]
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
            }
        });
        return dom;
    }
}