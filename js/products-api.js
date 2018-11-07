let products = [
    {
        name: 'R2D2 suitcase',  
        image: '../../assets/bag.jpg'
    },
    {
        name: 'banana slicer',  
        image: '../../assets/banana.jpg'
    },
    {
        name: 'iPod and toilet paper holder',  
        image: '../../assets/bathroom.jpg'
    },
    {
        name: 'peeptoe rainboots',  
        image: '../../assets/boots.jpg'
    },
    {
        name: 'tiny breakfast kitchenette',  
        image: '../../assets/breakfast.jpg'
    },
    {
        name: 'meatball shaped bubblegum',  
        image: '../../assets/bubblegum.jpg'
    },
    {
        name: 'chair with convex seat',  
        image: '../../assets/chair.jpg'
    },
    {
        name: 'cthulhu action figure',  
        image: '../../assets/cthulhu.jpg'
    },
    {
        name: 'dogbill',  
        image: '../../assets/dog-duck.jpg'
    },    
    {
        name: 'dragon meat',  
        image: '../../assets/dragon.jpg'
    },
    {
        name: 'pen-handled utensil set',  
        image: '../../assets/pen.jpg'
    },
    {
        name: 'dog bootie floor sweeper',  
        image: '../../assets/pet-sweep.jpg'
    },
    {
        name: 'pizza cutting scissors',  
        image: '../../assets/scissors.jpg'
    },
    {
        name: 'plush man-eating shark sleeping bag',  
        image: '../../assets/shark.jpg'
    },
    {
        name: 'baby pajamas with dusters',  
        image: '../../assets/sweep.jpg'
    },
    {
        name: 'plush tauntaun sleeping bag',  
        image: '../../assets/tauntaun.jpg'
    },
    {
        name: 'unicorn meat',  
        image: '../../assets/unicorn.jpg'
    },
    {
        name: 'tentacle usb',  
        image: '../../assets/usb.gif'
    },
    {
        name: 'watering can with backwards spout',  
        image: '../../assets/water-can.jpg'
    },
    {
        name: 'impossible wine glass',  
        image: '../../assets/wine-glass.jpg'
    },
];
function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}

const productsApi = {
    getAll() {
        const json = localStorage.getItem('products');
        if(json){
            products = JSON.parse(json);
        }
        return products;
    },
    add(item) {
        products.push(item);
        saveProducts();
    },
    remove(item) {
        const index = products.indexOf(item);
        if(index !== -1) {
            products.splice(index, 1);
            saveProducts();
            return index;
        }
    }  
};

export default productsApi;
