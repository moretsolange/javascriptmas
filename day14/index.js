const elf = document.getElementById("elf");
const btn = document.getElementById("btn");
const hangoutZone = document.querySelector(".elf-hangout-zone");

btn.addEventListener("click", duplicateElf);

function duplicateElf() {
  let newElf = document.createElement("div");
  newElf.innerText = "🧝";
  newElf.classList.add("elf");
  hangoutZone.append(newElf);
  console.log("Button clicked");
  /** Challenge:
    - Write a function to duplicate the elf when the button is clicked.
    - See index.css for optional styling challenges.
  **/
}

/** Stretch goals:
  - Write a function to give the elves some tools, or a cup of tea!
  - Limit the total number of elves to 100.
**/
