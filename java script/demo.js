// Variables and data types
var fullName = "Roshni";
var x = 10;
var y = 4;
var age = 23.5;
var isEngineer = true;

// Example full data
var fullName2 = "Satywan Kumar";
var address = "Ramgarh, Jharkhand";
var phone = 5;

// Sum example
var sum = x + y;

// ------------------------------
// console.log() different ways
// ------------------------------

// 1. String concatenation
console.log("the value of x is " + x + " and y is " + y);

// 2. Using comma separation
console.log("the value of x is", x, "and y is", y);

// 3. Template literals (recommended)
console.log(`the value of x is ${x} and y is ${y}`);

// 4. Simple template usage
console.log(`x = ${x} and y = ${y}`);

// 5. Expression inside template literals
console.log(`${x} + ${y} = ${sum}`);

// Direct calculation
console.log(`${x} + ${y} = ${x + y}`);

// ------------------------------
// Dynamic typing example
// ------------------------------
var c = 30;
console.log("Before change:", c);

c = "Now I am a string";
console.log("After change:", c);