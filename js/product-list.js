import html from './html.js';

let products = [
    {
        'name': 'Bag',
        'img': '../assets/bag.jpg'
    },
    {
        'name': 'Banana',
        'img': '../assets/banana.jpg'
    },
    {
        'name': 'Bathroom',
        'img': '../assets/bathroom.jpg'
    },
    {
        'name': 'Boots',
        'img': '../assets/boots.jpg'
    },
    {
        'name': 'Breakfast',
        'img': '../assets/breakfast.jpg'
    },
    {
        'name': 'Bubblegum',
        'img': '../assets/bubblegum.jpg'
    },
    {
        'name': 'Chair',
        'img': '../assets/chair.jpg'
    },
    {
        'name': 'Cthulhu',
        'img': '../assets/cthulhu.jpg'
    },
    {
        'name': 'Dog Duck',
        'img': '../assets/dog-duck.jpg'
    },
    {
        'name': 'Dragon',
        'img': '../assets/dragon.jpg'
    },
    {
        'name': 'Pen',
        'img': '../assets/pen.jpg'
    },
    {
        'name': 'Pet Sweep',
        'img': '../assets/pet-sweep.jpg'
    },
    {
        'name': 'Scissors',
        'img': '../assets/scissors.jpg'
    },
    {
        'name': 'Shark',
        'img': '../assets/shark.jpg'
    },
    {
        'name': 'Sweep',
        'img': '../assets/sweep.png'
    },
    {
        'name': 'Tauntaun',
        'img': '../assets/tauntaun.jpg'
    },
    {
        'name': 'Unicorn',
        'img': '../assets/unicorn.jpg'
    },
    {
        'name': 'USB',
        'img': '../assets/usb.gif'
    },
    {
        'name': 'Water Can',
        'img': '../assets/water-can.jpg'
    },
    {
        'name': 'Wine Glass',
        'img': '../assets/wine-glass.jpg'
    },
];

const rngPic1 = Math.floor(Math.random() * products.length);
const rngPic2 = Math.floor(Math.random() * products.length);
const rngPic3 = Math.floor(Math.random() * products.length);
function makeTemplate() {

    return html`
    <div id="random-pic-1" class="random-pics">
        <div>${products[rngPic1].name}</div>
        <img src="${products[rngPic1].img}" style="height: 150px">
    </div>

    <div id="random-pic-2" class="random-pics">
        <div>${products[rngPic2].name}</div>
        <img src="${products[rngPic2].img}" style="height: 150px">
    </div>

    <div id="random-pic-3" class="random-pics">
        <div>${products[rngPic3].name}</div>
        <img src="${products[rngPic3].img}" style="height: 150px">
    </dvi>
        `;
}


export default class RandomPics {
    render() {
        return makeTemplate();
    }
}