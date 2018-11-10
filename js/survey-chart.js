import html from './html.js';

function makeTemplate() {
    return html`
        <div class="survey-chart">
            <canvas width="1200" height="400"></canvas>
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

        const products = JSON.parse(localStorage.getItem('saveSurvey'));
        let labels = [];
        let viewCount = [];
        let clickCount = [];

        for(let i = 0; i < products.length; i++) {
            labels.push(products[i].name);
            clickCount.push(products[i].clicks);
            viewCount.push(products[i].views);
        }

        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Number of Clicks',
                    data: clickCount,
                    backgroundColor: 'navy',
                    borderColor: 'black',
                    borderWidth: 1
                }, 
                {
                    label: 'Number of Views',
                    data: viewCount,
                    backgroundColor: 'teal',
                    borderColor: 'black',
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