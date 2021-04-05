const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

const onInputChange = (e) => {
    spanEl.style.fontSize = `${e.currentTarget.value}px`;
}

inputEl.addEventListener('input', onInputChange);