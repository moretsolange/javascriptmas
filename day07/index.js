let addBtn = document.querySelector("button");
let addedItems = document.getElementById("addedItems");
let newElement = document.createElement("p");
let delBtn = document.querySelector(".remove");
addedItems.appendChild(newElement);

const wishlist = [
  "Macbook Air M2",
  // TODO: Add more items here
];
newElement.textContent = wishlist[0];

addBtn.addEventListener("click", () => {
  let inputField = document.querySelector(".addItem").value;

  if (inputField.trim() !== "" && !wishlist.includes(inputField)) {
    // checks if the inputfield is not empty, nor the array contains an already pushed input
    wishlist.push(inputField);
    displayItems();
  }
});

delBtn.addEventListener("click", () => {
  if (wishlist.length > 0) {
    // if there are more than 0 items in the array, we pop the last item, and re-render the UI
    wishlist.pop();
    displayItems();
  }
});

function displayItems() {
  addedItems.innerHTML = ""; // sets the innerHTML property to an empty string
  wishlist.forEach((item) => {
    // it iterates through each item of the array and performs and action
    let newElement = document.createElement("p"); //creates new paragraph
    newElement.textContent = item; //this sets the content of the new paragraph to the current item in the wishlist
    addedItems.appendChild(newElement); //then we append the item to the paragraph
  });
}

console.log(wishlist);
/** Challenge:
  - Iterate over the wishlist array.
  - Dynamically render your wishlist from the array.
  - Style the wishlist with CSS.
**/
