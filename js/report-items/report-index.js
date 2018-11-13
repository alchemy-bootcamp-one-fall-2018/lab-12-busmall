import App from './report-app.js';

const app = new App();
const root = document.getElementById('chart');
root.appendChild(app.render());