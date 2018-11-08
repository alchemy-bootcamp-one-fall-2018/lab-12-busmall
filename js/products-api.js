let json = window.localStorage.getItem('survey');

let survey = null;

if(json) {
    survey = JSON.parse(json);
} 
else {
    survey = createProducts();
}

function createProducts() {
    return [{
        name: 'bag',
        image: '../assets/bag.png',
        count: 0
    },
    {
        name: 'banana',
        image: '../assets/banana.jpg',
        count: 0
    },
    {
        name: 'bathroom',
        image: '../assets/bathroom.jpg',
        count: 0
    },
    {
        name: 'boots',
        image: '../assets/boots.jpg',
        count: 0
    },
    {
        name: 'breakfast',
        image: '../assets/breakfast.jpg',
        count: 0
    },
    {
        name: 'bubblegum',
        image: '../assets/bubblegum.jpg',
        count: 0
    },
    {
        name: 'chair',
        image: '../assets/chair.jpg',
        count: 0
    },
    {
        name: 'cthulhu',
        image: '../assets/cthulhu.jpg',
        count: 0
    },
    {
        name: 'dog-duck',
        image: '../assets/dog-duck.jpg',
        count: 0
    },
    {
        name: 'dragon',
        image: '../assets/dragon.jpg',
        count: 0
    },
    {
        name: 'pen',
        image: '../assets/pen.jpg',
        count: 0
    },
    {
        name: 'pet-sweep',
        image: '../assets/pet-sweep.jpg',
        count: 0
    },
    {
        name: 'scissors',
        image: '../assets/scissors.jpg',
        count: 0
    },
    {
        name: 'shark',
        image: '../assets/shark.jpg',
        count: 0
    },
    {
        name: 'sweep',
        image: '../assets/sweep.png',
        count: 0
    },
    {
        name: 'tauntaun',
        image: '../assets/tauntaun.jpg',
        count: 0
    },
    {
        name: 'unicorn',
        image: '../assets/unicorn.jpg',
        count: 0
    },
    {
        name: 'usb',
        image: '../assets/usb.gif',
        count: 0
    },
    {
        name: 'water-can',
        image: '../assets/water-can.jpg',
        count: 0
    },
    {
        name: 'wine-glass',
        image: '../assets/wine-glass.jpg',
        count: 0
    }
    ];
}

const productsApi = {
    getAll() {
        return survey;
    },

    save() {
        window.localStorage.setItem('survey', JSON.stringify(survey));
    }
};

export default productsApi;