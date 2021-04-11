const cntrlEl = document.querySelector('#controls');
const inputEl = cntrlEl.firstElementChild;
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesEl = document.querySelector('#boxes');

function randomizer() {
    return `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
}

const createBoxes = (amount) => {
    let size = 30;
    let arr = [];
    destroyBoxes();

    for (let i = 0; i < amount; i += 1) {
        const boxEl = document.createElement('div');
        boxEl.style.backgroundColor = randomizer();
        boxEl.style.width = boxEl.style.height =`${size}px`;
        arr.push(boxEl);
        size += 10;
    }   
 boxesEl.append(...arr);
}

const destroyBoxes = () => {
        boxesEl.innerHTML = '';
        inputEl.value = '';
    };

renderBtn.addEventListener('click', () => {
    if (+inputEl.value <= +inputEl.max) {
        createBoxes(+inputEl.value);
        return;
    }
    alert("too many boxes");
});

destroyBtn.addEventListener('click', destroyBoxes);



