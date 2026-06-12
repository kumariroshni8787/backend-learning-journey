// let i = 1;

// while (i <= 3) {
//   let j = 1;
//   let row = "";

//   while (j <= 3) {
//     row += "* ";
//     j++;
//   }

//   console.log(row);
//   i++;
// }


//Reverse a Number using While Loop (JavaScript)
let num = 256;
let reverse = 0;

while (num > 0) {
  let digit = num % 10;
  reverse = (reverse * 10) + digit;
  num = Math.floor(num / 10);
}

console.log(reverse);