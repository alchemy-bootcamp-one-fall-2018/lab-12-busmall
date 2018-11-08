let products = [

    {
        name: 'R2-D2 Bag',
        image: './assets/bag.jpg'
    },
    {
        name: 'Banana Slicer',
        image: './assets/banana.jpg'
    },
    {
        name: 'Ipad Toilet Roll Holder',
        image: './assets/bathroom.jpg'
    },
    {
        name: 'Yellow Rain Boots',
        image: './assets/boots.jpg'
    },
    {
        name: 'Breakfast Cooker',
        image: './assets/breakfast.jpg'
    },
    {
        name: 'Meatball Bubblegum',
        image: './assets/bubblegum.jpg'
    },
    {
        name: 'Convex Chair',
        image: './assets/chair.jpg'
    },
    {
        name: 'Cthulhu Figure',
        image: './assets/cthulhu.jpg'
    },
    {
        name: 'Duck Bill Muzzle',
        image: './assets/dog-duck.jpg'
    },
    {
        name: 'Dragon Meat',
        image: './assets/dragon.jpg'
    },
    {
        name: 'Cutlery Pen Caps',
        image: './assets/pen.jpg'
    },
    {
        name: 'Dog Sweeping Booties',
        image: './assets/pet-sweep.jpg'
    },
    {
        name: 'Pizza Scissors',
        image: './assets/scissors.jpg'
    },
    {
        name: 'Shark Sleeping Bag',
        image: './assets/shark.jpg'
    },
    {
        name: 'Baby Sweep Onesie',
        image: './assets/sweep.png'
    },
    {
        name: 'Tauntaun Sleeping Bag',
        image: './assets/tauntaun.jpg'
    },
    {
        name: 'Unicorn Meat',
        image: './assets/unicorn.jpg'
    },
    {
        name: 'Tentacle USB',
        image: './assets/usb.gif'
    },
    {
        name: 'Useless Watercan',
        image: './assets/water-can.jpg'
    },
    {
        name: 'Difficult Wine Glass',
        image: './assets/wine-glass.jpg'
    }
];

// const json = localStorage.getItem('products');
// if(json) {
//     products = JSON.parse(json);
// }

const productApi = {
    getAll() {
        return products;
    }
    // getSurvey() {
    
    //     const survey = products.map(product => {
    //         return {
    //             name: product.name,
    //             image: product.image,
    //             views: 0,
    //             clicks: 0
    //         };
    //     });     
    //     return survey;
    // },
    // save() {
    //     localStorage.setItem('products', JSON.stringify(products));
    
    // }

};

export default productApi;