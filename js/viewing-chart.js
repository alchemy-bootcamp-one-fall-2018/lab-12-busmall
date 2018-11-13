import html from './html.js';

function makeTemplate() {
    return html`
        <h2>Survey Chart</h2>
        <div class="chart-container">
            <canvas width="600" height="500"></canvas>      
        </div>
    `;
}

export default class ProductChart {
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
        console.log(products[0].name);
        for(let i = 0; i < products.length; i++) {
            // const products = this.results[i];
            labels.push(products[i].name);
            data1.push(products[i].views);
            data2.push(products[i].clicks);
        }
        console.log(labels);

        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Views',
                    data: data1,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }, 
                {
                    label: '# of Clicks',
                    data: data2,
                    backgroundColor: 'lightgrey',
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
                    }],
                    xAxes: [{
                        ticks: {
                            autoSkip: false
                        }
                    }]
                }
            }
        });
        console.log(this.results);
        return dom;
    }
}