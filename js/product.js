// import html from './html.js';

// function makeTemplate(product) {
//     return html`
//     <li class="product-card">
//     <img id="product" src="./${product.image}">
//     </li>
//     `;
// }

// export default class Product {
//     constructor(product, onSelect) {
//         this.product = product;
//         this.onSelect = onSelect;
        
//         this.totalViews = 0;
//     }
//     update(){
//         let productUpdate;
//     }
//     render() {
//         let dom = makeTemplate(this.product);
//         const ul = dom.querySelector('ul');
        
//         this.products.forEach(product => {
//             let productComp = new Product(product, this.onSelect);
//             ul.appendChild(productComp.render());
//         });
        
//         return dom;
//     }
// }
