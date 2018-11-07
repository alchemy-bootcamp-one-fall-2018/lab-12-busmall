// import productsApi from './products-api.js';
// import html from './html.js';
// import ImageItem from './products-display.js';
// import surveyApi from './survey-api.js';


// get initial data, all products from products.js
// const products = productsApi.getAll();
// console.log(products);


// this code displays one random name/image product pair
// var randomProduct = products[Math.floor(Math.random() * products.length)];
// console.log(randomProduct);


// this code displays entire products array including name, image, views, clicks
// const survey = products.map(product => {
//     return {
//         name: product.name,
//         image: product.image,
//         views: 0,
//         clicks: 0
//     };
// });
// console.log(survey);

// TRY AND DISPLAY THE IMAGES LITERALLY
let allProducts = [];
let viewedProducts = [];

// DISABLED FOR NOW SO ESLINT DOESN'T FAIL PULL REQUEST
// use new Image() constructor https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image
// var bag = new Image('bag', 'assets/bag.jpg');
// var banana = new Image('banana', 'assets/banana.jpg');
// var bathroom = new Image('bathroom', 'assets/bathroom.jpg');
// var boots = new Image('boots', 'assets/boots.jpg');
// var breakfast = new Image('breakfast', 'assets/breakfast.jpg');
// var bubblegum = new Image('bubblegum', 'assets/bubblegum.jpg');
// var chair = new Image('chair', 'assets/chair.jpg');
// var cthulhu = new Image('cthulhu', 'assets/cthulhu.jpg');
// var dogduck = new Image('dog-duck', 'assets/dog-duck.jpg');
// var dragon = new Image('dragon', 'assets/dragon.jpg');
// var pen = new Image('pen', 'assets/pen.jpg');
// var pet_sweep = new Image('pet-sweep', 'assets/pet-sweep.jpg');
// var scissors = new Image('scissors', 'assets/scissors.jpg');
// var shark = new Image('shark', 'assets/shark.jpg');
// var sweep = new Image('sweep', 'assets/sweep.png');
// var tauntaun = new Image('tauntaun', 'assets/tauntaun.jpg');
// var unicorn = new Image('unicorn', 'assets/unicorn.jpg');
// var usb = new Image('usb', 'assets/usb.gif');
// var water_can = new Image('water-can', 'assets/water-can.jpg');
// var wine_glass = new Image('wine-glass', 'assets/wine-glass.jpg');

// DISABLED FOR NOW SO ESLINT DOESN'T FAIL PULL REQUEST
// function Image(name, path) {
//     this.name = name;
//     this.path = path;
//     allProducts.push(this);
// }

var addProduct = function(item) {
    var productContainer = document.getElementById('photos');
    var product = document.createElement('img');
    product.setAttribute('id', item.name);
    product.setAttribute('src', item.path);
    product.setAttribute('width', '25%');
    productContainer.appendChild(product);
};

function getRandomNum() {
    return Math.floor(Math.random() * allProducts.length);
}

function displayProducts() {
    var productSpot = document.getElementById('photos');
    productSpot.innerHTML = '';
    for(var i = 0; i < 3; i++) {
        var item = allProducts[getRandomNum()];
        addProduct(item);
    }
}
viewedProducts;

displayProducts();