const cntrlEl = document.querySelector('#controls');
const inputEl = cntrlEl.firstElementChild;
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesEl = document.querySelector('#boxes');

const max = 250;
const min = 0;
const createNumber = () => Math.round(Math.random() * (max - min) + min);

const createBoxes = () => {
   let amount = inputEl.value;
    let size = 20;
 
    for (let i = 0; i < Number(amount); i += 1) {
        
        let r = createNumber();
        let g = createNumber();
        let b = createNumber();
        size += 10;
        const boxEl = document.createElement('div');
        boxEl.style.backgroundColor = `rgb(${r},${g},${b})`;
        boxEl.style.width = `${size}px`;
        boxEl.style.height = `${size}px`;

        boxesEl.appendChild(boxEl);
    }   
}

    const destroyBoxes = () => {
        boxesEl.innerHTML = ' ';
    };

renderBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);



