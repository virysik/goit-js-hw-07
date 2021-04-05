const inputEl = document.querySelector('#validation-input');

const onBlur = () => {
   
    const elLength = Number(inputEl.dataset.length);
    const symbolLength = inputEl.value.length;
    
    if ( symbolLength!== elLength) {
        inputEl.classList.add("invalid");
    }
    inputEl.classList.add("valid");
};

inputEl.addEventListener('blur', onBlur);