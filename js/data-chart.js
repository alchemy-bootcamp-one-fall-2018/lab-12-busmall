import surveyApi from './survey-api.js';

function makeTemplate() {
    let html= `
        <canvas>
    `;
    
    return html;
}

class DataChart {
    render() {
        const canvas = document.querySelector('canvas');

        if(canvas) {
            const ctx = canvas.getContext('2d');
            let surveys = surveyApi.getSurveys()[0];
            console.log(surveys);
    
            let disProds = surveyApi.getDisProds();
            let products = [];
            let views = [];
            let clicks = [];
    
            disProds.forEach(set => {
                set.forEach(product => {
                    if(!products.includes(product.name)) {
                        console.log(product);
                        products.push(product.name);
                        views.push(product.views);
                    }
                });
            });
            
            console.log(products);
            console.log(views);
    
            this.chart = new Chart(ctx, {
                type: 'horizontalBar',
                data: {
                    labels: products,
                    datasets: [{
                        label: '# of Votes',
                        data: views,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
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
        }

    }

}

export default DataChart;