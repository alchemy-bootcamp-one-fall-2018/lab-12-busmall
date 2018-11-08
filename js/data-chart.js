import surveyApi from './survey-api.js';

// function makeTemplate() {
//     let html= `
//         <canvas>
//     `;
    
//     return html;
// }

class DataChart {
    constructor() {
        const canvasViews = document.getElementById('views');
        const canvasClicks = document.getElementById('clicks');

        if(canvasViews) {
            const ctxViews = canvasViews.getContext('2d');
            const ctxClicks = canvasClicks.getContext('2d');
    
            let disProds = surveyApi.getDisProds();
            let products = [];
            let views = [];
            let clicks = [];
    
            disProds.forEach(set => {
                if(!products.includes(set.name)) {
                    products.push(set.name);
                    views.push(set.views);
                    clicks.push(set.clicks);
                }
            });
            
            console.log(products);
            console.log(views);
    
            this.chartViews = new Chart(ctxViews, {
                type: 'horizontalBar',
                data: {
                    labels: products,
                    datasets: [{
                        label: '# of Views',
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

            this.chartClicks = new Chart(ctxClicks, {
                type: 'horizontalBar',
                data: {
                    labels: products,
                    datasets: [{
                        label: '# of Clicks',
                        data: clicks,
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