# Day 01 - Backend Development Introduction

## Topics Covered

### 1. JavaScript

* JavaScript ek programming language hai.
* Backend aur frontend dono me use hoti hai.
* Node.js ki help se JavaScript server par run kar sakte hain.

### 2. Node.js

* Node.js JavaScript runtime environment hai.
* Iski help se backend applications bana sakte hain.
* Server create karne aur APIs banane ke liye use hota hai.

### 3. Express.js

* Express.js Node.js ka framework hai.
* Routing, middleware aur API development ko easy banata hai.

### 4. MongoDB

* MongoDB ek NoSQL database hai.
* Data ko documents ke form me store karta hai.

### 5. API

* API (Application Programming Interface) frontend aur backend ke beech communication karne ke liye use hoti hai.

### 6. JWT (JSON Web Token)

* User authentication aur authorization ke liye use hota hai.
* Login ke baad user ko token provide kiya jata hai.

### 7. bcrypt

* Password ko hash karne ke liye use hota hai.
* Security improve karta hai.

### 8. Express File Upload

* User ke uploaded files ko server par handle karne ke liye use hota hai.

### 9. Cloudinary

* Images aur files ko cloud me store karne ki service hai.
* Uploaded files ko manage aur optimize karne me help karti hai.

## Summary

Aaj backend development ka overview mila aur JavaScript, Node.js, Express.js, MongoDB, API, JWT, bcrypt, file upload aur Cloudinary ke basic concepts ke baare me jana.




#  Day 02 - JavaScript & Software Basics

## 1. What we can do with JavaScript
* JavaScript se hum websites interactive bana sakte hain
* Backend development (Node.js ke through) kar sakte hain
* Mobile apps (React Native jaise frameworks se) bana sakte hain
* Desktop apps (Electron.js se) bana sakte hain
* Web applications develop kar sakte hain

## 2. How apps are made (Basic idea)
* Mobile App → Android / iOS ke liye apps (React Native, Flutter etc.)
* Desktop App → Windows/Mac/Linux apps (Electron.js, Java, C# etc.)
* Web App → Browser me chalne wale apps (React, Angular, Node.js etc.)

👉 VS Code bhi ek desktop application hai jo Electron.js se bana hai.

## 3. Compiler vs Interpreter
### Compiler
* Poora code ek saath translate karta hai machine language me
* Execution fast hota hai
* Errors compile time pe milte hain
* Example: C, C++

### Interpreter
* Code line by line execute karta hai
* Execution thoda slow hota hai
* Error turant line by line milta hai
* Example: JavaScript, Python

👉 JavaScript mostly interpreter-based language hai.

## 4. What is a Program?

A program is a set of instructions given to a computer to perform a specific task.

### 📌 Day 02 Summary

Aaj humne jaana ki JavaScript se kya kya ban sakta hai, different types of applications (mobile, desktop, web) ka basic idea mila, aur compiler vs interpreter ka difference samjha.




# Day 3 - Compiler vs Interpreter & First JavaScript Code

## 📚 What I Learned

### 1. Compiler vs Interpreter

🔹 Compiler

* A compiler translates the entire code at once into machine code.
* After compilation, the program runs as a whole.
* If there is an error, it shows all errors after compilation.
* Example languages: C, C++

🔹 Interpreter
* An interpreter runs code line by line.
* Stops execution when it finds an error.
* Easier for debugging.
* Example languages: JavaScript, Python


## 🔥 Key Difference

* Compiler → Whole code at once
* Interpreter → Line by line execution

### 2. JavaScript Execution Style
* JavaScript uses an interpreter-based execution model (but modern JS engines also optimize using JIT compilation).
* It executes code step by step in the browser or Node.js.

### 3. Code Editors for JavaScript

We learned about different code editors used for JavaScript development:

* Visual Studio Code (VS Code) ⭐ Most popular
* Sublime Text
* Atom
* Notepad++
* WebStorm

👉 We installed a code editor and set it up for JavaScript development.

### 4. First JavaScript Program

We wrote our first JavaScript code and printed our name.

* console.log("My Name");

Or example:

* console.log("Rahul");

This prints text in the console.

## 🧠 Key Concepts
* Compiler processes full code at once before execution.
* Interpreter executes code line by line.
* JavaScript runs in an interpreted (and optimized) environment.
* VS Code is widely used for JavaScript development.
* console.log() is used to print output in JavaScript.

## 🚀 Summary

Today I learned the difference between compiler and interpreter, explored code editors used for JavaScript development, installed a code editor, and wrote my first JavaScript program to print my name using console.log().





# 📘 Day 4 - JavaScript Basics (Data Types, Operators, Variables)

## 🧠 Topics Covered

* Data Types in JavaScript
* Variables
* Variable Naming Rules
* Operators
* Arithmetic Operators (with examples)

## 📌 1. Data Types in JavaScript

JavaScript has different types of data used to store values.

👉 Common Data Types:

* String → Text data

let name = "Rahul";

* Number → Numeric values (integer or decimal)

let age = 20;
let price = 99.99;

* Boolean → True or False values

let isStudent = true;
let isLoggedIn = false;

## 📌 2. Variables in JavaScript

A variable is like a container used to store data.

### Example:
* let name = "Amit";
* let age = 25;

### Types of variable declarations:
* let → Modern way (recommended)
* const → Value cannot be changed
* var → Old method (avoid using)

## 📌 3. Variable Naming Rules

Follow these rules while naming variables:

### ✅ Allowed:
* Must start with letter, _, or $
* Can contain letters, numbers, _, $
* Case-sensitive
* let userName;
* let _age;
* let $salary;

### ❌ Not Allowed:
* Cannot start with number
let 1name; // wrong

* No spaces allowed
let user name; // wrong

* Cannot use reserved keywords
let let = 5; // wrong


## 📌 4. Operators in JavaScript

Operators are used to perform operations on values and variables.

### Types of Operators:
* Arithmetic Operators
* Assignment Operators
* Comparison Operators
* Logical Operators

(For today, focus is on Arithmetic Operators)

## 📌 5. Arithmetic Operators

Used for mathematical calculations.

Operators:
Operator	Meaning	                Example
+	        Addition	            5 + 3 = 8
-	        Subtraction	            5 - 3 = 2
*	        Multiplication	        5 * 3 = 15
/	        Division	            6 / 2 = 3
%	        Modulus (remainder)	    5 % 2 = 1
**	        Exponent	            2 ** 3 = 8


## 📌 Summary of the Day

### Today I learned about:

* JavaScript data types (string, number, boolean)
* Variables and how to declare them
* Rules for naming variables properly
* Different types of operators
* Arithmetic operators with examples.




# 📘 backend-learning-journey — Day 5

## 🧠 Topic: JavaScript Variables, Data Types & Console Output

## 1. Variables in JavaScript

In JavaScript, variables are used to store data.

### Example:

* var fullName = "Roshni";
* var x = 10;
* var age = 23.5;
* var isEngineer = true;

### 📌 Types of data used here:
* String → "Roshni"
* Number → 10, 23.5
* Boolean → true

## 2. JavaScript is a Dynamic Typed Language

* JavaScript automatically detects the data type of a variable.

### Example:

var c = 30;
c = "Now I am a string";

👉 Same variable can hold different types of values.

## 3. Printing Output using console.log()

There are multiple ways to print output in JavaScript.

### ✅ Method 1: String Concatenation
console.log("the value of x is " + x + " and y is " + y);

👉 Uses + to join strings and variables.

⚠️ Note: If y is not defined, it will give an error.

### ✅ Method 2: Comma Separation
console.log("the value of x is", x, "and y is", y);

👉 Automatically adds spaces between values.

### ✅ Method 3: Template Literals (Recommended)
console.log(`the value of x is ${x} and y is ${y}`);

👉 Uses backticks (`) and ${} for variables.

### 4. Expression inside Template Literals
console.log(`${x} + ${y} = ${x + y}`);

👉 You can directly perform operations inside ${}.


## 🧾 Summary of the Day
* Learned about variables in JavaScript
* Understood different data types (string, number, boolean)
* Learned that JavaScript is dynamically typed
* Explored different ways to use console.log()
* Practiced template literals (best modern method)
* Understood common errors due to undefined variables