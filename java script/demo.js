// let i = 1;

// while (i <= 5) {
//   let j = 1;
//   let row = "";

//   while (j <= 5) {
//     row += (i * j) + "\t";
//     j++;
//   }

//   console.log(row);
//   i++;
// }



let i = 1;

while (i <= 6) {
  let j = 1;
  let row = "";

  // spaces
  while (j <= 6 - i) {
    row += " ";
    j++;
  }

  let k = 1;

  // stars
  while (k <= i) {
    row += "* ";
    k++;
  }

  console.log(row);
  i++;
}