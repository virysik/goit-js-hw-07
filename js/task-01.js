const categoriesEl = document.querySelector("#categories");
const itemsEl = categoriesEl.children;
console.log(`У списку ${itemsEl.length} категорії.`);

let message = [...itemsEl].forEach(el => {
    let title = el.firstElementChild;
    let itemList = el.lastElementChild.children;
    console.log(`Категорія: ${title.textContent}`);
    console.log(`Кількість елементів: ${itemList.length}`)
});

