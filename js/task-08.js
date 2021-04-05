const cntrlEl = document.querySelector('#controls');
const inputEl = cntrlEl.firstElementChild;
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesEl = document.querySelector('#boxes');

const createBoxes = () => {
    const max = 250;
    const min = 0;
    let numR = Math.round(Math.random() * (max - min) + min);
    let numG = Math.round(Math.random() * (max - min) + min);
    let numB = Math.round(Math.random() * (max - min) + min);

    const boxEl = document.createElement('div');
    boxEl.id = "box";
    boxEl.style.backgroundColor = `rgb(${numR},${numG},${numB})`;
    boxEl.style.width = '30px';
    boxEl.style.height = '30px';

    boxesEl.appendChild(boxEl);
}

    const onClean = () => {
        boxesEl.innerHTML = ' ';
    };


renderBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', onClean);