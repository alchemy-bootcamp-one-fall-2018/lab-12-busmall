import ResultList from './results.js';
import surveyApi from './survey-api.js';
console.log(surveyApi.getAll());
let results = surveyApi.getAll();

const ul = document.getElementById('final-text');
for(let i = 0; i < results.length; i++){
    const resultList = new ResultList();
    ul.appendChild(resultList.render(results[i]));
}