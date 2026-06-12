// Day 8: Comparison Operators, Logical Operators & Operator Precedence

let age = 22;
let marks = 75;
let isStudent = true;

// Comparison Operators
console.log("age > 18 :", age > 18);      // true
console.log("marks >= 50 :", marks >= 50); // true
console.log("age == '22' :", age == "22"); // true
console.log("age === '22' :", age === "22"); // false
console.log("age != 18 :", age != 18); // true
console.log("age !== '18' :", age !== "18"); // true

// Logical Operators
console.log("age > 18 && marks >= 50 :", age > 18 && marks >= 50); // true
console.log("age < 18 || marks >= 50 :", age < 18 || marks >= 50); // true
console.log("!isStudent :", !isStudent); // false

// Operator Precedence
let result = age > 18 && marks >= 50 || false;

console.log("Result :", result);

// Using Parentheses to Control Precedence
let result2 = age > 18 && (marks < 50 || isStudent);

console.log("Result2 :", result2);