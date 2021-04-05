const nameEl = document.querySelector("#name-output");

const inputEl = document.querySelector("#name-input");

const getValue = (e) => {
    if (e.currentTarget.value.length) {
        return nameEl.textContent = e.currentTarget.value;
    };
    return nameEl.textContent = "незнайомець";
};
    

inputEl.addEventListener('input', getValue);

