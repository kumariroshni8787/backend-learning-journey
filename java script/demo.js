let str = "   I am Learning JavaScript Backend   ";

console.log("Original String:", str);

// trim
str = str.trim();
console.log("After trim:", str);

// uppercase
console.log("Uppercase:", str.toUpperCase());

// lowercase
console.log("Lowercase:", str.toLowerCase());

// length
console.log("Length:", str.length);

// slice
console.log("Slice (0-10):", str.slice(0, 10));

// includes
console.log("Includes 'Learning':", str.includes("Learning"));

// replace
console.log("Replace:", str.replace("JavaScript", "Node.js"));

// split
let words = str.split(" ");
console.log("Split into words:", words);

// charAt loop
console.log("Characters:");
for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}