// ===============================
// 1. Basic Math.floor examples
// ===============================

console.log("Basic Math.floor Examples:");
console.log(Math.floor(4.9));
console.log(Math.floor(7.1));
console.log(Math.floor(10.99));
console.log(Math.floor(5.0));

console.log("\n");

// ===============================
// 2. Random number between 0 - 9
// ===============================

console.log("Random Numbers (0-9):");

for (let i = 1; i <= 5; i++) {
    let randomNum = Math.floor(Math.random() * 10);
    console.log(randomNum);
}

console.log("\n");

// ===============================
// 3. Random number between 1 - 100
// ===============================

console.log("Random Numbers (1-100):");

for (let i = 1; i <= 5; i++) {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(randomNum);
}

console.log("\n");

// ===============================
// 4. Simulate dice roll (1 - 6)
// ===============================

console.log("Dice Rolling Simulation:");

for (let i = 1; i <= 5; i++) {
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log("Roll", i + ":", dice);
}

console.log("\n");

// ===============================
// 5. Round down a list of numbers
// ===============================

let numbers = [2.3, 4.8, 9.1, 7.6, 5.9];

console.log("Rounded Down Numbers:");

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i], "=>", Math.floor(numbers[i]));
}

console.log("\n");

// ===============================
// 6. Find floor values in custom logic
// ===============================

let price = 499.99;
let quantity = 3;

let total = price * quantity;

console.log("Total Price:", total);
console.log("After floor:", Math.floor(total));

console.log("\n");

// ===============================
// 7. Generate marks and pass/fail check
// ===============================

console.log("Student Marks (Random 0-100):");

for (let i = 1; i <= 5; i++) {
    let marks = Math.floor(Math.random() * 100) + 1;

    if (marks >= 33) {
        console.log("Student", i + ":", marks, "=> Pass");
    } else {
        console.log("Student", i + ":", marks, "=> Fail");
    }
}