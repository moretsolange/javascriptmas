const dangerArray =
  // function saveSanta(arr) {
  //   let evilArray = arr.flat(4);
  //   evilArray.forEach((element, index) => {
  //     if (element !== "🎅") {
  //       evilArray[index] = "";
  //     }
  //   });
  //   return evilArray;
  // }

  [
    ["🎅", "👺"],
    [
      ["🎅", "🦁"],
      ["👹", "🎅"],
    ],
    [
      [
        ["🎅", "🐻"],
        ["🧌", "🎅"],
      ],
      [
        ["🐯", "🎅"],
        ["🎅", "😈"],
      ],
    ],
  ];

// const dates = [
//   {
//     date: "2023. 12. 20. 10:00",
//     type: "startDate",
//   },
//   {
//     date: "2023. 12. 20. 18:00",
//     type: "endDate",
//   },
// ];

// kezdete: startDate(); //"2023. 12. 20. 10:00"
// vége: dates[1].date; //"2023. 12. 20. 18:00"

// computed: {
//   startDate() {
//     return dates.filter(date => date.type === "startDate").shift();
//   }
// }

function saveSanta(arr) {
  let purgedArray = [];
  arr.forEach((e) => {
    if (typeof e === "string") {
      if (e === "🎅") {
        purgedArray.push("🎅");
      } else {
        purgedArray.push(" ");
      }
    } else {
      purgedArray.push(saveSanta(e));
    }
  });
  return purgedArray;
}

// Check the returned results from saveSanta()
console.log(saveSanta(dangerArray));
console.log(JSON.stringify(saveSanta(dangerArray)));
