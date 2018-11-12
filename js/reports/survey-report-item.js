import html from '../html.js';

function makeTemplate(product) {
    return html`
      <li class="product-survey">
           <h6 class="product-name">${product.name} </h6>   
           <p class="views">${product.views}   views </p> 
           <p class="clicks">${product.clicks}  clicks </p>     
      </li>
  `;    
}

class SurveyDisplay {
    constructor(product) {
        this.product = product;
    }

    render() {
        return makeTemplate(this.product);
    }
    
}

export default SurveyDisplay;