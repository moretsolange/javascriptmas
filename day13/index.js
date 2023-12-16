let result = document.getElementById("food");
let vegCheck = document.getElementById("vegetarian-input");
let btn = document.getElementById("btn");
let guests = document.getElementById("num-input");

btn.addEventListener("click", () => {
  guestNumber = guests.valueAsNumber;
  if (vegCheck.checked && guestNumber >= 1) {
    result.innerHTML = "Winter Squash Risotto";
  } else if (guestNumber > 5) {
    result.innerHTML = "Turkey";
  } else if (guestNumber >= 1 && guestNumber < 4) {
    result.innerHTML = "Ham";
  }
});
/**
Task:
- Write the code to help a user choose the perfect Christmas dinner idea
  based on the number of people attending.
- Include a checkbox for the user to specify the meal 
  should be vegetarian-friendly.

Dinner suggestions (or choose your own!):
Vegetarian: Winter Squash Risotto
4 people or less: Ham
5+ people: Turkey

Stretch goals:
- Add more dietary options.
- Show recipes when the meal has been selected.
 */
