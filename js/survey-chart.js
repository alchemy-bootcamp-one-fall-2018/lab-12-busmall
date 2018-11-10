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
        let clicks = [];
        let views = [];

        const survey = JSON.parse(localStorage.getItem('surveys'));

        for(let i = 0; i < this.results.length; i++) {
            labels.push(survey[i].clicks);
            clicks.push(survey[i].clicks);
            views.push(survey[i].views);
        }
        
        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                label: labels,
                datasets: [{
                    label: '# of views',
                    data: views
                },
                {
                    label: '# of clicks',
                    data: clicks
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
            }
          
        });
        return dom; 
    }
}