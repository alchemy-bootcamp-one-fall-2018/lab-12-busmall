import html from '../js/html.js';

function makeTemplate() {
    return html`
        <h2>Chart</h2>
        <div class="chart-container">
            <canvas width="400" height="600"></canvas>
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

        const products = JSON.parse(localStorage.getItem('surveys'));

        for(let i = 0; i < this.results[0].length; i++) {
            labels.push(this.results[0][i].name);
            clicks.push(this.results[0][i].clicks);
            views.push(this.results[0][i].views);
        }
        
        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
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
                title: {
                    display: true,
                    text: 'Survey Results'
                },
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