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
        'img': '../assets/sweep.jpg'
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
        'img': '../assets/usb.jpg'
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
    return html`
    <div id="random-pics">
        <p>Some random pictures</p>
    </div>
`;
}

console.log(products.length, 'array length');
function getRandomPic(banana) {
    // A random number between [0,1) multiplied by the length of the array
    // Then takes the floor of that decimal
    // Ex. Math.random() = .567...
    // products.length = 20 (because there are 20 obj in array)
    // So, Math.random() * products.length = .567 * 20 = 11.34
    // Now, taking the floor of that number would equal 11.
    // Therefore, foobar (in this case) = 11.
    // If we console log foobar, we should get 11.
    var foobar = Math.floor(Math.random() * products.length);
    console.log(foobar, 'random pics');
    return products[foobar];
}
console.log(getRandomPic(), 'idk what this does');


export default class RandomPics {
    render() {
        for(var i = 0; i < products.length; i++) {
            products[i].name;
            console.log(products[i].name);
        }
        
        return makeTemplate();
    }
}