const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories:`, allCategories.length);

for (let category of allCategories) {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.childElementCount}`);
}
