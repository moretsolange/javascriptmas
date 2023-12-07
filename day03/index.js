function calcTotalCandies(children, candy) {
  const candiesPerChildren = Math.floor(candy / children);
  const totalCandiesEaten = candiesPerChildren * children;

  console.log(totalCandiesEaten);
}

calcTotalCandies(3, 10); // expected output: 9
calcTotalCandies(4, 20); // expected output: 20
calcTotalCandies(6, 25); // expected output: 24
