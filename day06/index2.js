const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"];
const generatedPeople = [];

let i = 0;

function generateSecretSantaPairs(arr) {
    let output = {};

  while (i < arr.length) {
      let actual = arr[i];
      let generate = arr[Math.floor(Math.random() * arr.length)];

      if(actual === generate || generatedPeople.includes(generate)) {
          continue;
      }

      // we must force to select the last member if we did not select him/her previously
      // because otherwise he/she would be left alone for himself/herself (it would result an infinite loop)
      let last = arr[arr.length - 1];
      let penultimate = arr[arr.length - 2];
      if (actual === penultimate && !generatedPeople.includes(last)) {
          generate = last;
      }

      generatedPeople.push(generate)
      output[actual] = generate;
      i++;
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
