const item = document.getElementById("entertainment");

// Add an event listener to the <select> element that adds a new <li> item to the <ul> when an option is selected. If theitem already exists, it should be removed instead

item.addEventListener("change", () => {
  const selectedItem = item.value;

  // Query the list for the selected item
  const listValue = document.querySelector(`li[data-value="${selectedItem}"]`);
  console.log(`Selected item:`, selectedItem);
  console.log(`Queried list value:`, listValue);

  // If the item does not exist, add it to the list
  if (!listValue) {
    const newLi = document.createElement("li");
    newLi.textContent = selectedItem;
    newLi.setAttribute("data-value", selectedItem);
    document.getElementById("itemList").appendChild(newLi);
    console.log(`New list item added:`, newLi);
    // If the item already exists, remove it from the list
  } else {
    console.log(`Item already exists:`, listValue);
    document.getElementById("itemList").removeChild(listValue);
  }
});
