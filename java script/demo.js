// Student Data Management using Arrays

const students = [
    "Satya",
    "Rahul",
    "Aman",
    "Priya"
];

console.log("Original Array:");
console.log(students);

console.log("\n-------------------");

// Accessing Elements
console.log("First Student:", students[0]);
console.log("Second Student:", students[1]);

console.log("\n-------------------");

// Updating Element
students[1] = "Rohit";

console.log("After Update:");
console.log(students);

console.log("\n-------------------");

// Adding Elements
students.push("Neha");
students.push("Ankit");

console.log("After push():");
console.log(students);

console.log("\n-------------------");

// Removing Last Element
students.pop();

console.log("After pop():");
console.log(students);

console.log("\n-------------------");

// Adding at Beginning
students.unshift("Admin");

console.log("After unshift():");
console.log(students);

console.log("\n-------------------");

// Removing First Element
students.shift();

console.log("After shift():");
console.log(students);

console.log("\n-------------------");

// Array Length
console.log("Total Students:", students.length);

console.log("\n-------------------");

// Loop Through Array
console.log("Student List:");

for (let i = 0; i < students.length; i++) {
    console.log(`${i + 1}. ${students[i]}`);
}

console.log("\n-------------------");

// Checking if Array Includes Value
console.log("Contains Satya?", students.includes("Satya"));
console.log("Contains Karan?", students.includes("Karan"));

console.log("\n-------------------");

// Finding Index
console.log("Index of Satya:", students.indexOf("Satya"));

console.log("\n-------------------");

// Converting Array to String
console.log("Joined Array:");
console.log(students.join(", "));

console.log("\n-------------------");

// Reverse Array
console.log("Reversed Array:");
console.log([...students].reverse());

console.log("\n-------------------");

// Sorting Array
console.log("Sorted Array:");
console.log([...students].sort());

console.log("\n-------------------");

// Final Array
console.log("Final Students Data:");
console.log(students);