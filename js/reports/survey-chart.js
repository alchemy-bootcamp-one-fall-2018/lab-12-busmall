import html from '../html.js';
import SurveyApi from '../survey-api.js';

function makeTemplate() {
    return html`
        <h2>Chart</h2>
        <div class="chart-container">
            <canvas width="400"></canvas>
        </div>
    `;
}

const products = SurveyApi.getAll();

export default class SurveyChart {
    constructor(results) {
        this.results = results;
    }

    render() {
        let dom = makeTemplate();

        const canvas = dom.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        let labels = [];
        let dataViews = [];
        let dataClicks = [];

        
        for(let i = 0; i < products.length; i++) {
            labels.push(products[i].name);
            dataViews.push(products[i].views);
            dataClicks.push(products[i].clicks);
        }

         /* eslint-disable-next-line */
        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Views',
                    data: dataViews,
                    backgroundColor: 'lightblue',
                    borderColor: 'black',
                    borderWidth: 1
                },
                {
                    label: '# of Clicks',
                    data: dataClicks,
                    backgroundColor: 'orange',
                    borderColor: 'black',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'BusMall Survey Results',
                    fontFamily: 'Open Sans Condensed',
                    fontSize: 20
                },
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