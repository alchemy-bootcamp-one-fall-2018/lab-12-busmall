import html from './html.js';

function makeTemplate(product) {
    return html`
      <li class="product-survey">
          <p class="product-name">${product.name}  has  
              ${product.views}   views and 
              ${product.clicks}  clicks  
          </p>
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