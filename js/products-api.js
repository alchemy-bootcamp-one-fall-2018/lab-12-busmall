import html from './html.js';
import products from './product-list.js';

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

export default class ImageSelector {
    render() {
        const dom = makeTemplate();
        const imageContainerOne = dom.getElementById('random-pic-1');
        imageContainerOne.addEventListener('click', function() {
            console.log('clicked 1');
            // event.preventDefault();
        });
        const imageContainerTwo = dom.getElementById('random-pic-2');
        imageContainerTwo.addEventListener('click', function() {
            console.log('clicked 2');
            // event.preventDefault();
        });
        const imageContainerThree = dom.getElementById('random-pic-3');
        imageContainerThree.addEventListener('click', function() {
            console.log('clicked 3');
            // event.preventDefault();
        });
        return dom;
    }
}
