const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const ingredientEl = ingredients.map(el => {
    let itemEl = document.createElement("li");
    itemEl.textContent = el;
    return itemEl;
}
);

const ingredientListEl = document.querySelector("#ingredients");
ingredientListEl.prepend(...ingredientEl);

console.log(ingredientListEl);