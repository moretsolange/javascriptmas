const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"];
const generatedPeople = [];

let i = 0;

function generateSecretSantaPairs(arr) {
  let output = {};

  while (i < arr.length) {
    let actual = arr[i];
    let generate = arr[Math.floor(Math.random() * arr.length)];
  }
  return output;
}

console.log(generateSecretSantaPairs(people));

/**
Example output:
{
    Alice: "Dan",
    Bob: "Ferdinand",
    Carly: "Ed",
    Dan: "Alice",
    Ed: "Ginny",
    Ferdinand: "Bob",
    Ginny: "Carly"
}
 */
