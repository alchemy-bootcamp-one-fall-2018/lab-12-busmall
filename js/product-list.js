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

function makeTemplate() {
    var foobar = Math.floor(Math.random() * products.length);

    return html`
    <div id="random-pics">
        <p>Some random pictures</p>
        <div>${products[foobar].name}</div>
        <img src="${products[foobar].img}" style="width: 200px">
    </div>
`;
}

console.log(products.length, 'array length');
function getRandomPic() {
    var foobar = Math.floor(Math.random() * products.length);
    return products[foobar];
}
// console.log(getRandomPic().name, '//Gets random object');

export default class RandomPics {
    render() {
        return makeTemplate();
    }
}