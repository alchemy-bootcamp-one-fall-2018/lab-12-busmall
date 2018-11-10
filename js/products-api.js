import html from './html.js';
import products from './product-list.js';

function getRandomIndex(length) {
    return Math.floor(Math.random() * length);
}

function makeTemplate(threePictures) {
    return html`
    <div id="random-pic-1" class="random-pics">
        <div>${threePictures[0].name}</div>
        <img src="${threePictures[0].img}" style="height: 150px">
    </div>
    <div id="random-pic-2" class="random-pics">
        <div>${threePictures[1].name}</div>
        <img src="${threePictures[1].img}" style="height: 150px">
    </div>

    <div id="random-pic-3" class="random-pics">
        <div>${threePictures[2].name}</div>
        <img src="${threePictures[2].img}" style="height: 150px">
    </dvi>
    
        `;
}

function makeThreePictures() {
    let copy = products.slice();

    function getRandomImg() {
        const index = getRandomIndex(copy.length);
        const product = copy[index];
        copy.splice(index, 1);
        return product;
    }

    const triad = [
        getRandomImg(),
        getRandomImg(),
        getRandomImg(),
    ];
    return triad;
}

console.log(makeThreePictures());
export default class ImageSelector {
    render() {
        const dom = makeTemplate(makeThreePictures());
        const imageContainerOne = dom.getElementById('random-pic-1');
        imageContainerOne.addEventListener('click', () => {
            console.log('clicked 1');
            
        });
        // const imageContainerTwo = dom.getElementById('random-pic-2');
        // imageContainerTwo.addEventListener('click', () => {
        //     console.log('clicked 2');

        // });
        // const imageContainerThree = dom.getElementById('random-pic-3');
        // imageContainerThree.addEventListener('click', () => {
        //     console.log('clicked 3');

        // });
        return dom;
    }
}
