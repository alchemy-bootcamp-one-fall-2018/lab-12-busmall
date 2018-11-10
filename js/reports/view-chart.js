import html from '../../js/html.js';

function makeTemplate() {
    return html`
        <h2> Pretty Chart </h2>
        <div class="chart-container">
            <canvas width="400"></canvas>
        </div>
    `;
}

export default class ViewChart {
    constructor(results) {
        this.results = results;
    }

    render() {
        let dom = makeTemplate();

        const canvas = dom.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        let name = [];
        let data = [];

        for(let i = 0; i < this.results.length; i++) {
            const card = this.results[i];
            name.push(card.name);
            data.push(card.count);
        }

        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: name,
                datasets: [{
                    label: '# of Views',
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