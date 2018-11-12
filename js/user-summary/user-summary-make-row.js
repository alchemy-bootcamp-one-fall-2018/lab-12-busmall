// import html from '../html.js';
// import nameShow from './user-summary-names';

// import html from './html.js';

// let template = function(product) {
//     return html`
//         <div> 
//             <h2 class="product-name">${product.name}</h2>
//             <img src="../assets/${product.image}">        
//         </div>
//     `;
// };

// class MakeRow {
    
//     constructor(product, onSelect) {
//         this.product = product;
//         this.onSelect = onSelect;
//     }
//     render() {
//         const dom = template(this.product);
//         const divItem = dom.querySelector('div');
//         const product = this.product;
//         product.views++;

//         divItem.addEventListener('click', () => {
//             this.onSelect(product);
//         });
              
//         return dom;
//     }
// }

// export default MakeRow;