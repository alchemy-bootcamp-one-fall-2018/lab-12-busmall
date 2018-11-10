import html from './html.js';




function makeTemplate(product) {
    return html`
      <li class="product-survey">
          <h4 class="product-name">${product.name}  has  
              ${product.views}   views and 
              ${product.clicks}  clicks  
          </h4>
      
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