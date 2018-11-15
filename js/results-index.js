import ResultsApp from './results-app.js';

const root = document.getElementById('chart-goes-here');
const app = new ResultsApp();
root.appendChild(app.render());