const itemsListRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsListRef.length}`);

itemsListRef.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
