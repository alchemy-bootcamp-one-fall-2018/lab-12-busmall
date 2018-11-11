import Survey from './survey.js';

const survey = new Survey();
const root = document.getElementById('root');
root.appendChild(survey.render());