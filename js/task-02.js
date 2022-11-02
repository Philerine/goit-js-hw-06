const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");
const ingredientsItems = [];

for (const ingredient of ingredients) {
  const addItemTag = document.createElement('li');
  addItemTag.textContent = `${ingredient}`;

  addItemTag.classList.add('item');
  ingredientsItems.push(addItemTag);
}

ingredientsList.append(...ingredientsItems);
