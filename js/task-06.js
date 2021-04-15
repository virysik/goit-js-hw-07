const inputEl = document.querySelector('#validation-input');

const onBlur = () => {
   
    const elLength = Number(inputEl.dataset.length);
    const symbolLength = inputEl.value.length;
    
    if (symbolLength !== elLength) {
        if (inputEl.classList.contains('valid')) {
            inputEl.classList.remove("valid");
        }
        inputEl.classList.add("invalid");
    } else {
        if (inputEl.classList.contains('invalid')) {
            inputEl.classList.remove("invalid");
        }
    inputEl.classList.add("valid");
}
};

inputEl.addEventListener('blur', onBlur);