let people = [];

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const peopleListEl = document.getElementById("people-list");
let imageEl = document.querySelector(".img");

document.addEventListener("DOMContentLoaded", function () {
  const storedData = localStorage.getItem("person");

  if (storedData) {
    people = JSON.parse(storedData);
    renderList(people);
  }
});

addButtonEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;

  if (inputValue) {
    people.push(inputValue);
    clearInputFieldEl();

    renderList(people);
    localStorage.setItem("person", JSON.stringify(people));
  }
});

function renderList(array) {
  clearPeopleListEl();

  for (let i = 0; i < array.length; i++) {
    let currentPerson = array[i];

    appendPersonToPeopleListEl(currentPerson);
  }
}

function clearPeopleListEl() {
  peopleListEl.innerHTML = "";
}

function clearInputFieldEl() {
  inputFieldEl.value = "";
}

function appendPersonToPeopleListEl(person) {
  let newEl = document.createElement("li");

  newEl.textContent = person;

  newEl.addEventListener("dblclick", function () {
    let index = people.indexOf(person);

    people.splice(index, 1);

    renderList(people);
    localStorage.setItem("person", JSON.stringify(people));
    changeImg();
  });
  peopleListEl.append(newEl);
}

function changeImg() {
  imageEl.src = "https://media4.giphy.com/media/ftwB7X9Ja1Ads4dT59/giphy.gif";
  setTimeout(() => {
    imageEl.src = "icon.png";
  }, 2000);
}
