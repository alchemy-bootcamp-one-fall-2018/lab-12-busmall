import products from './product-list.js';

const productApi = {
    getAll() {
        return products;
    }
};

export default productApi;

// function clickRandomPicture() {
//     var pickPicture1 = document.getElementById('random-pic-1');
//     pickPicture1.addEventListener('click', function(event) {
//         event.preventDefault();
//         console.log('foo bar');
//     });
// }

// export default clickRandomPicture;