import html from '../html.js';

function makeTemplate() {
    return html`
        <div class="chart-container">
            <canvas width="600" height="500"></canvas>
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
        let data1 = [];
        let data2 = [];

        const products = JSON.parse(localStorage.getItem('products'));

        for(let i = 0; i < products.length; i++) {
            labels.push(products[i].name);
            data1.push(products[i].views);
            data2.push(products[i].clicks);
        }

        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Number of Views',
                    data: data1,
                    backgroundColor: 'lightgray',
                    borderColor: 'black',
                    borderWidth: 1
                },
                {
                    label: 'Number of Clicks',
                    data: data2,
                    backgroundColor: 'blue',
                    borderColor: 'black',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'Busmall Survey Results',
                    fontFamily: 'Verdana',
                    fontSize: 18
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            autoSkip: false
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            autoSkip: false
                        }
                    }]
                }
            }
        });
        return dom;
    }
}