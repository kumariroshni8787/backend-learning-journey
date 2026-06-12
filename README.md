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





# 📘 backend-learning-journey — Day 6

## 🧠 Topic: JavaScript String Concatenation

In Day 6, we practiced String Concatenation in JavaScript.

String concatenation means joining two or more strings together.

🔗 String Concatenation
## 1. Using + Operator
var firstName = "Roshni";
var lastName = "Kumari";

console.log(firstName + lastName);

👉 Output:

RoshniKumari

## 2. Adding Space Between Strings
console.log(firstName + " " + lastName);

👉 Output:

Roshni Kumari

## 3. With Extra Text
var city = "Ramgarh";

console.log("My name is " + firstName + " " + lastName + " and I live in " + city);

## 4. Concatenation with Numbers
var age = 23;

console.log("My age is " + age);

👉 Number is automatically converted into string.

## 5. Mixed Example
var x = 10;
var y = 20;

console.log("The sum of " + x + " and " + y + " is " + (x + y));

👉 Output:

The sum of 10 and 20 is 30

### ⚠️ Important Concept

👉 If you use + with strings, JavaScript converts everything into a string.

### Example:

"10" + 5  // "105"

## 🧾 Summary of the Day
* Learned string concatenation using +
* Understood how to join multiple strings
* Learned to add space between strings
* Practiced mixing strings and numbers
* Understood type conversion in JavaScript




# 🧠 Day 7 Assignment Operators

Assignment operators are used to assign values to variables and also modify them in a short way.

## 2. Basic Assignment Operator

🔹 =

Used to assign a value.

let x = 10;

Here, value 10 is assigned to variable x.

## 3. Compound Assignment Operators

These operators combine arithmetic + assignment.

### 🔹 += (Add and assign)
let x = 10;
x += 5;   // x = x + 5
console.log(x); // 15

### 🔹 -= (Subtract and assign)
let x = 10;
x -= 3;   // x = x - 3
console.log(x); // 7

### 🔹 *= (Multiply and assign)
let x = 10;
x *= 2;   // x = x * 2
console.log(x); // 20

### 🔹 /= (Divide and assign)
let x = 10;
x /= 2;   // x = x / 2
console.log(x); // 5

### 🔹 %= (Modulus and assign)
let x = 10;
x %= 3;   // x = x % 3
console.log(x); // 1

### 🔹 **= (Exponent and assign)
let x = 2;
x **= 3;  // x = x ** 3
console.log(x); // 8


## 💡 Important Points
* Assignment operators reduce code length
* They update the value of the same variable
* Very commonly used in loops and backend logic


## 📌 Day 7 Summary

Today I learned about Assignment Operators in JavaScript. I studied the basic assignment operator = and compound operators like +=, -=, *=, /=, %= and **= which help in updating variable values in a shorter way.





# 📘 Day 8: Comparison Operators, Logical Operators & Operator Precedence

## 📌 What I Learned

Today I learned about Comparison Operators, Logical Operators, and Operator Precedence in JavaScript. These operators help us make decisions in code by comparing values and combining multiple conditions.

## 🧠 Key Concepts
## 🔍 Comparison Operators

Comparison operators are used to compare two values and return a boolean (true or false).

* == → equal to (checks value only)
* === → strict equal to (checks value + type)
* != → not equal
* !== → strict not equal
* > → greater than
* < → less than
* >= → greater than or equal to
* <= → less than or equal to

## 🔗 Logical Operators

Logical operators are used to combine multiple conditions.

* && → AND (both conditions must be true)
* || → OR (at least one condition must be true)
* ! → NOT (reverses the result)

Example:

let age = 20;

console.log(age > 18 && age < 30); // true
console.log(age > 18 || age < 10); // true
console.log(!(age > 18)); // false

## ⚖️ Operator Precedence

Operator precedence means which operator is evaluated first in an expression.

Order (high to low priority):

() → parentheses
! → NOT
* / %
+ -
> < >= <=
== === != !==
&&
||

### Example:

let result = 10 + 5 > 12 && 5 < 3;
console.log(result); // false

## ⚙️ Important Notes
* === is always safer than == because it checks type also.
* Logical operators are widely used in conditions (if, while, etc.).
* Always use parentheses () to make complex expressions clear.
* Operator precedence helps JavaScript decide evaluation order automatically.

## 🧾 Summary

Today I learned how to compare values using comparison operators and combine conditions using logical operators. I also learned how operator precedence decides the order in which expressions are evaluated in JavaScript. These concepts are very important for writing correct conditions in backend logic.




# Day 09 - Practice Session

Day 09 was dedicated to practicing the concepts learned on Day 08.

## Topics Practiced
* Comparison Operators (>, <, >=, <=, ==, ===, !=, !==)
* Logical Operators (&&, ||, !)
* Operator Precedence
* Using Parentheses in Conditions
* Evaluating Boolean Expressions
* Practice Goal

The focus was on understanding how JavaScript evaluates conditions and predicting outputs before running the code.

## Summary

* Strengthened understanding of comparison operators.
* Practiced writing and evaluating logical expressions.
* Improved understanding of operator precedence.
* Learned to use parentheses for better readability and predictable results.






# 📘 Day 10 – JavaScript Conditional Statements (if, else, else if)

## 🧠 What are Conditional Statements?

Conditional statements are used to make decisions in code.

They allow your program to run different blocks of code based on conditions.

### In JavaScript, the main conditional statements are:

* if
* else
* else if

## 🔹 1. if Statement

The if statement runs a block of code only when the condition is true.

### Syntax:
if (condition) {
  // code runs if condition is true
}

### Example:
let age = 18;

if (age >= 18) {
  console.log("You are an adult");
}


## 🔹 2. if...else Statement

If the condition is false, the else block runs.

### Syntax:
if (condition) {
  // true block
} else {
  // false block
}

### Example:
let age = 16;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

## 🔹 3. if...else if...else Statement

Used when there are multiple conditions.

### Syntax:
if (condition1) {
  // code block 1
} else if (condition2) {
  // code block 2
} else {
  // default code block
}

### Example:
let marks = 75;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 70) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}
## 🔹 Important Points
* Conditions always return true or false
* JavaScript uses comparison operators like:
==, ===
>, <, >=, <=
Only one block runs in if-else if chain

### 🧪 Real-life Example
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please login first");
}

## 📌 Summary (Day 10)
* Learned about conditional statements in JavaScript
* Used if, else, and else if
* Understood decision-making in programming
* Practiced real-world logic examples



# 📘 Day 11 – Practice (Day 10: if, else, else if)
🧠 Focus of the Day

Today is a practice day based on JavaScript conditional statements:

if
else
else if

The goal is to improve logic building using real problems.


## 📌 Key Learning
* How to apply if-else logic in real problems
* How multiple conditions work using else if
* How to combine comparison operators (>, <, >=)
* Basic problem-solving mindset for backend logic

## 📌 Summary (Day 11)
* Practiced conditional statements
* Solved basic logic problems
* Improved decision-making in JavaScript
* Strengthened fundamentals for backend development




# 📘 Day 12 - While Loop in JavaScript

🔁 What is a Loop in Programming?

* A loop is a programming concept used to repeat a block of code multiple times until a condition is met.

* Instead of writing the same code again and again, we use loops to make programs shorter and smarter.

🔁 What is a While Loop?

* A while loop is used in JavaScript to repeat a block of code as long as a condition is true.

It checks the condition before each iteration.

## ⚙️ Syntax
while (condition) {
  // code to run
}

## 🧠 How it works
* Check the condition
* If true → run the code inside the loop
* Repeat again
* Stop when condition becomes false

## 💻 Example 1: Basic While Loop
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

📌 Output:

1
2
3
4
5
## 💻 Example 2: Countdown
let count = 5;

while (count > 0) {
  console.log(count);
  count--;
}

📌 Output:

5
4
3
2
1

## ⚠️ Important Points
* If condition never becomes false → infinite loop
* Always update the variable inside the loop
* Used when number of iterations is not fixed

## 🔥 Difference: while vs for loop
* while loop → used when condition-based looping
* for loop → used when iteration count is known

## 🧠 Summary of Day 12

Today I learned about the while loop in JavaScript, how it works, its syntax, and how it repeats code until a condition becomes false. Also learned how to avoid infinite loops and use counters properly.




# 📘 Day 13 - Nested While Loop (Loop Inside Loop)


## 🔁 What is a Nested While Loop?
A nested while loop means a while loop inside another while loop.
* The outer loop runs first
* For every single run of the outer loop, the inner loop completes fully

## ⚙️ Syntax

while (condition1) {
  while (condition2) {
    // code
  }
}

## 🧠 How it works
* Outer loop starts
* Inner loop runs completely
* Outer loop moves to next step
* Inner loop again runs fully
* Repeats until outer loop ends

## 💻 Example 1: Basic Nested While Loop
let i = 1;

while (i <= 3) {
  let j = 1;

  while (j <= 3) {
    console.log("i = " + i + ", j = " + j);
    j++;
  }

  i++;
}

### 📌 Output
i = 1, j = 1
i = 1, j = 2
i = 1, j = 3
i = 2, j = 1
i = 2, j = 2
i = 2, j = 3
i = 3, j = 1
i = 3, j = 2
i = 3, j = 3

## 💻 Example 2: Pattern Printing (Star Pattern)
let i = 1;

while (i <= 5) {
  let j = 1;
  let row = "";

  while (j <= i) {
    row += "* ";
    j++;
  }

  console.log(row);
  i++;
}

### 📌 Output
*
* *
* * *
* * * *
* * * * *

## ⚠️ Important Points
* Always reset inner loop variable (j = 1) inside outer loop
* Otherwise loop will not work correctly
* Nested loops increase time complexity

## 🧠 Summary of Day 13

Today I learned about nested while loops, where one loop runs inside another loop. I also practiced printing patterns like star patterns and understood how inner and outer loops work together.




# 📘 Day 14 - Practice (Loops Revision: while + Nested while)

🔁 What was practiced today?
Today’s practice focuses on while loops and nested while loops to strengthen logic building.


## 🧠 Summary of Day 14

Today I practiced basic and nested while loops, including number printing, reverse counting, multiplication tables, and simple star patterns. This helped strengthen loop logic and control flow understanding.




# 📘 Day 15: JavaScript For Loop

🧠 Topic: For Loop in JavaScript

A for loop is used when we want to repeat a block of code a specific number of times.

It is one of the most commonly used loops in JavaScript.

## 🔁 Syntax of For Loop

for (initialization; condition; increment/decrement) {
    // code to be executed
}


## 🔍 Explanation:

* initialization → runs once at the start (e.g., let i = 0)
* condition → loop runs as long as this is true
* increment/decrement → updates loop counter after each iteration

## 💡 Example 1: Basic For Loop
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}

### Output:
Number: 1  
Number: 2  
Number: 3  
Number: 4  
Number: 5  

## 📦 Example 2: Loop through an array

let fruits = ["apple", "banana", "mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

### Output:
apple  
banana  
mango  

## ⚙️ How it works step by step

Example:

for (let i = 0; i < 3; i++) {
    console.log(i);
}
i = 0 → prints 0
i = 1 → prints 1
i = 2 → prints 2
i = 3 → loop stops (condition false)

## 🚀 Key Points
* Used for repeating tasks
* Best when number of iterations is known
* Commonly used with arrays and strings
* Easy to control using counter variable

## 🧾 Summary (Day 15)

Today I learned about the for loop in JavaScript, how it works, its syntax, and how to use it for repeating tasks and looping through arrays. It is a fundamental concept used in backend development for handling repetitive operations efficiently.




# 📘 Day 16: JavaScript Practice Questions 


##  Question : Sum of first 5 natural numbers
Find the sum of numbers from 1 to 5 using a loop.
### answer
let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum += i;
}

console.log("Sum:", sum);
## 🧾 Summary (Day 16)

Today I practiced JavaScript for loops with basic coding problems.




# 📘 Day 17: JavaScript Math.floor()


## 🧠 Topic: Math.floor() in JavaScript

* Today I learned about Math.floor(), a built-in JavaScript method used to round numbers down to the nearest whole number.
* It is part of the Math object in JavaScript.

## 🔢 What is Math.floor()?
Math.floor() removes the decimal part and always rounds the number downward.

👉 Syntax:
Math.floor(number)

## 💡 Example 1: Basic Usage
console.log(Math.floor(4.9));console.log(Math.floor(4.1));console.log(Math.floor(4.0));
Output:
444

## 📉 Important Behavior
InputOutputReason4.94rounds down4.14rounds down4.04already whole number

## ⚠️ Negative Numbers
Math.floor() also works with negative numbers, but it still rounds down (towards -infinity).

console.log(Math.floor(-4.1));console.log(Math.floor(-4.9));
Output:
-5-5

## 🧪 Example 3: Using Math.floor in real cases

👉 Random number (0–9)
let randomNumber = Math.floor(Math.random() * 10);console.log(randomNumber);
Explanation:


Math.random() → gives 0 to 0.999...


* 10 → makes range 0 to 9.999...


Math.floor() → converts it to 0 to 9



## 🚀 Where Math.floor is used


* Random number generation


* Pagination systems


* Splitting data into chunks


* Games and logic calculations


* Rounding down prices or values



## 🧾 Summary (Day 17)
Today I learned about Math.floor() in JavaScript. It is used to round numbers down to the nearest integer. I also learned how it behaves with positive and negative numbers and how it is commonly used with Math.random() in real-world applications.




## 📘 Day 18: JavaScript Strings & String Methods
🧠 Topic: Strings in JavaScript

A string is a sequence of characters used to represent text in JavaScript.

Strings can be written using:

let a = "Hello";
let b = 'World';

## 🔤 Common String Methods

Today I learned many important string methods used in JavaScript.

📌 1. length

Returns the number of characters in a string.

let name = "Backend";
console.log(name.length);

📌 2. toUpperCase()

Converts string to uppercase.

let name = "backend";
console.log(name.toUpperCase());

📌 3. toLowerCase()

Converts string to lowercase.

let name = "BACKEND";
console.log(name.toLowerCase());

📌 4. trim()

Removes extra spaces from start and end.

let name = "   backend   ";
console.log(name.trim());

📌 5. slice()

Extracts part of a string.

let text = "JavaScript";
console.log(text.slice(0, 4));

📌 6. substring()

Similar to slice but does not accept negative indexes.

let text = "JavaScript";
console.log(text.substring(0, 4));

📌 7. replace()

Replaces a part of string.

let text = "I love Java";
console.log(text.replace("Java", "JavaScript"));

📌 8. includes()

Checks if a string contains a word.

let text = "I am learning backend";
console.log(text.includes("learning"));

📌 9. indexOf()

Returns position of first match.

let text = "JavaScript";
console.log(text.indexOf("S"));

📌 10. charAt()

Returns character at specific index.

let text = "Backend";
console.log(text.charAt(2));

📌 11. split()

Converts string into array.

let text = "a,b,c,d";
console.log(text.split(","));


## 🚀 Real Use Cases of Strings
* User input handling
* Form validation
* Data cleaning (trim, replace)
* Searching text (includes)
* Parsing data (split)
* Formatting output

## 🧾 Summary (Day 18)

Today I learned about JavaScript strings and important string methods like length, toUpperCase, trim, slice, replace, includes, and split. These methods are very useful for handling text data in backend development.




# 📘 Day 19: JavaScript Objects
🧠 Topic: Objects in JavaScript

An object is a collection of key-value pairs.
It is used to store multiple related data in a single variable.

Objects are very important in backend development because APIs, databases, and real-world data are mostly structured as objects.

## 📦 Object Syntax

let person = {
    name: "Rahul",
    age: 20,
    city: "Ranchi"
};

* Key → name, age, city
* Value → "Rahul", 20, "Ranchi"

## 🔍 Accessing Object Values

1. Dot notation
console.log(person.name);

2. Bracket notation
console.log(person["age"]);

## ✏️ Adding New Properties
person.gender = "Male";
console.log(person);

## ✏️ Updating Values
person.age = 21;
console.log(person);

## ❌ Deleting Properties
delete person.city;
console.log(person);

## 🔁 Looping Through Object
for...in loop
let car = {
    brand: "Toyota",
    model: "Innova",
    year: 2020
};

for (let key in car) {
    console.log(key, ":", car[key]);
}

## 📦 Nested Object
let student = {
    name: "Amit",
    marks: {
        math: 80,
        science: 90,
        english: 85
    }
};

console.log(student.marks.science);

## 🧠 Object with Function (Method)
let user = {
    name: "Raj",
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
};

user.greet();

## 🚀 Real Use Cases of Objects

* Storing user data
* API responses (JSON format)
* Database records
* Configuration settings
* Backend data modeling

## 🧾 Summary (Day 19)

Today I learned about JavaScript objects, which are used to store structured data in key-value pairs. I practiced accessing, updating, deleting, looping through objects, and using nested objects and methods. Objects are very important in backend development and real-world applications.




# Day 20 - JavaScript Objects and Spread Operator

## Introduction

Today I learned about JavaScript Objects, accessing object properties, nested objects, arrays inside objects, and the Spread Operator (`...`) for merging multiple objects.

---

## 1. JavaScript Objects

An object is used to store data in key-value pairs.

### Example

```javascript
var student = {
    isEngineer: true,
    contact: {
        at: 'ranchi, jharkhand',
        phone: '9876543210',
        email: 'sk@gmail.com'
    },
    favFood: ['dal', 'roti', 'alu']
}
```

### Understanding the Object Structure

```javascript
student
│
├── isEngineer → true
├── contact
│   ├── at → "ranchi, jharkhand"
│   ├── phone → "9876543210"
│   └── email → "sk@gmail.com"
│
└── favFood
    ├── "dal"
    ├── "roti"
    └── "alu"
```

---

## 2. Accessing Object Properties

### Dot Notation

```javascript
console.log(student.contact)
console.log(student.contact.phone)
```

Output:

```javascript
{
  at: 'ranchi, jharkhand',
  phone: '9876543210',
  email: 'sk@gmail.com'
}

9876543210
```

---

### Bracket Notation

```javascript
console.log(student["contact"]["email"])
```

Output:

```javascript
sk@gmail.com
```

---

## 3. Accessing Non-Existing Properties

```javascript
console.log(student.name)
```

Output:

```javascript
undefined
```

Since the `name` property does not exist inside the object, JavaScript returns `undefined`.

---

## 4. Arrays Inside Objects

Objects can contain arrays as values.

```javascript
console.log(student.favFood)
```

Output:

```javascript
['dal', 'roti', 'alu']
```

Accessing individual items:

```javascript
console.log(student.favFood[0])
```

Output:

```javascript
dal
```

---

## 5. Spread Operator (...)

The Spread Operator is used to copy or merge objects and arrays.

### Example

```javascript
const d1 = {
    name: 'satya raj',
    email: 'sk@gmail.com'
}

const d2 = {
    phone: '9876544',
    address: 'ranchi, jharkhand'
}

const data = {
    ...d1,
    ...d2
}

console.log(data)
```

Output:

```javascript
{
  name: 'satya raj',
  email: 'sk@gmail.com',
  phone: '9876544',
  address: 'ranchi, jharkhand'
}
```

---

## How Spread Operator Works

```javascript
const data = {
    ...d1,
    ...d2
}
```

JavaScript copies all properties from `d1` and `d2` into a new object.

Equivalent to:

```javascript
const data = {
    name: 'satya raj',
    email: 'sk@gmail.com',
    phone: '9876544',
    address: 'ranchi, jharkhand'
}
```

---

## Benefits of Spread Operator

* Creates a new object.
* Easy object merging.
* Reduces code complexity.
* Commonly used in React and Node.js projects.
* Helps maintain immutability.

---

## Important Points

1. Objects store data in key-value pairs.
2. Nested objects can contain other objects.
3. Arrays can be stored inside objects.
4. Dot notation and bracket notation are used to access properties.
5. Accessing a missing property returns `undefined`.
6. Spread Operator (`...`) is used to copy and merge objects.
7. When merging objects, later properties overwrite earlier ones if keys are the same.

Example:

```javascript
const a = { name: 'Satya' }
const b = { name: 'Raj' }

const result = {
    ...a,
    ...b
}

console.log(result)
```

Output:

```javascript
{ name: 'Raj' }
```

---

## Interview Notes

### What is an Object in JavaScript?

An object is a collection of key-value pairs used to store related data.

### What is the difference between Dot Notation and Bracket Notation?

* Dot Notation: `student.contact.phone`
* Bracket Notation: `student["contact"]["phone"]`

### What does the Spread Operator do?

The Spread Operator expands properties of an object or elements of an array and is commonly used for copying and merging data.

---

## Today's Learning

* Created JavaScript objects.
* Worked with nested objects.
* Accessed object properties using dot and bracket notation.
* Learned about arrays inside objects.
* Understood `undefined` for missing properties.
* Used the Spread Operator to merge multiple objects into one.
* Learned practical use cases of object merging.

#### Day 20 Summary

Today you learned how JavaScript objects work, including nested objects and arrays inside objects. You practiced accessing data using both dot notation and bracket notation. You also learned the Spread Operator (...), which allows multiple objects to be merged into a single object efficiently. This is a very important concept that is widely used in modern JavaScript, Node.js, Express.js, and React applications.





# Day 21 - JavaScript Arrays

## Introduction

Today I learned about JavaScript Arrays. Arrays are used to store multiple values in a single variable. They help organize related data and make it easier to access, update, and manipulate multiple items.

---

## What is an Array?

An array is a special variable that can hold more than one value.

### Example

```javascript
const fruits = ['Apple', 'Banana', 'Mango'];

console.log(fruits);
```

### Output

```javascript
[ 'Apple', 'Banana', 'Mango' ]
```

---

## Accessing Array Elements

Array elements are accessed using their index number.

> Note: Array indexing starts from `0`.

```javascript
const fruits = ['Apple', 'Banana', 'Mango'];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
```

### Output

```javascript
Apple
Banana
Mango
```

---

## Updating Array Elements

```javascript
const fruits = ['Apple', 'Banana', 'Mango'];

fruits[1] = 'Orange';

console.log(fruits);
```

### Output

```javascript
[ 'Apple', 'Orange', 'Mango' ]
```

---

## Array Length

The `length` property returns the total number of elements in an array.

```javascript
const fruits = ['Apple', 'Banana', 'Mango'];

console.log(fruits.length);
```

### Output

```javascript
3
```

---

## Common Array Methods

### 1. push()

Adds an element at the end of the array.

```javascript
const fruits = ['Apple', 'Banana'];

fruits.push('Mango');

console.log(fruits);
```

Output:

```javascript
[ 'Apple', 'Banana', 'Mango' ]
```

---

### 2. pop()

Removes the last element.

```javascript
const fruits = ['Apple', 'Banana', 'Mango'];

fruits.pop();

console.log(fruits);
```

Output:

```javascript
[ 'Apple', 'Banana' ]
```

---

### 3. unshift()

Adds an element at the beginning.

```javascript
const fruits = ['Banana', 'Mango'];

fruits.unshift('Apple');

console.log(fruits);
```

Output:

```javascript
[ 'Apple', 'Banana', 'Mango' ]
```

---

### 4. shift()

Removes the first element.

```javascript
const fruits = ['Apple', 'Banana', 'Mango'];

fruits.shift();

console.log(fruits);
```

Output:

```javascript
[ 'Banana', 'Mango' ]
```

---

## Looping Through Arrays

### Using for Loop

```javascript
const fruits = ['Apple', 'Banana', 'Mango'];

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

Output:

```javascript
Apple
Banana
Mango
```

---

## Arrays Can Store Different Data Types

```javascript
const data = [
    'Satya',
    21,
    true,
    { city: 'Ranchi' }
];

console.log(data);
```

---

## Important Points

1. Arrays store multiple values in a single variable.
2. Array indexing starts from `0`.
3. Use `length` to find the number of elements.
4. `push()` adds elements at the end.
5. `pop()` removes elements from the end.
6. `unshift()` adds elements at the beginning.
7. `shift()` removes elements from the beginning.
8. Arrays can store different data types.

---

## Interview Notes

### What is an Array?

An array is a data structure used to store multiple values in a single variable.

### Does Array Index Start From 1?

No. Array indexing starts from `0`.

### Which Method Adds an Element at the End?

`push()`

### Which Method Removes the Last Element?

`pop()`

---

## Today's Learning

* Created arrays.
* Accessed array elements using index numbers.
* Updated array values.
* Used the `length` property.
* Learned common array methods.
* Iterated through arrays using loops.
* Understood real-world use cases of arrays.

### Day 21 Summary

Today you learned the fundamentals of JavaScript Arrays. You practiced creating arrays, accessing elements through indexes, updating values, and using important methods like push(), pop(), shift(), and unshift(). Arrays are one of the most commonly used data structures in JavaScript and are heavily used in Node.js, Express.js, and MongoDB applications.



# Day 22 - JavaScript Arrays, Objects, Inventory Analysis & Data Aggregation

## 📅 Day 22

### Topics Covered

* Working with Arrays of Objects
* Looping through Data using `for` loop
* Calculating Total Product Quantity
* Inventory Investment Calculation
* Profit and Loss Analysis
* Filtering Products
* Grouping Data by Category
* Object-based Data Aggregation

---

# Product Inventory Dataset

We worked with an array of product objects where each product contains:

```javascript
{
  id: 1,
  name: "Wireless Mouse",
  cp: 450,
  sp: 650,
  category: "Electronics",
  quantity: 25
}
```

### Fields Explanation

| Field    | Meaning                  |
| -------- | ------------------------ |
| id       | Unique product ID        |
| name     | Product name             |
| cp       | Cost Price               |
| sp       | Selling Price            |
| category | Product category         |
| quantity | Available stock quantity |

---

# 1. Iterating Through Array of Objects

Used a `for` loop to access each product.

```javascript
for (var i = 0; i < products.length; i++) {
    console.log(products[i]);
}
```

### Purpose

* Read all products one by one.
* Access object properties.
* Display product details.

---

# 2. Calculating Total Quantity of Products

```javascript
var totalProduct = 0;

for (var i = 0; i < products.length; i++) {
    totalProduct += products[i].quantity;
}

console.log(totalProduct);
```

### Logic

* Start with `0`.
* Add quantity of every product.
* Final value gives total inventory count.

---

# 3. Calculating Total Investment

Investment means:

```text
Cost Price × Quantity
```

```javascript
var totalInvest = 0;

for (var i = 0; i < products.length; i++) {
    totalInvest += products[i].cp * products[i].quantity;
}
```

### Formula

Total Investment = Σ(Cost Price × Quantity)

---

# 4. Calculating Total Selling Value

```javascript
var totalSell = 0;

for (var i = 0; i < products.length; i++) {
    totalSell += products[i].sp * products[i].quantity;
}
```

### Formula

Total Selling Value = Σ(Selling Price × Quantity)

---

# 5. Profit and Loss Analysis

## Profit Case

```javascript
if (totalSell > totalInvest) {
    var profit = totalSell - totalInvest;
}
```

### Profit Formula

```text
Profit = Selling Value - Investment
```

### Profit Percentage Formula

```text
Profit % = (Profit × 100) / Investment
```

---

## Loss Case

```javascript
else {
    var loss = totalInvest - totalSell;
}
```

### Loss Formula

```text
Loss = Investment - Selling Value
```

### Loss Percentage Formula

```text
Loss % = (Loss × 100) / Investment
```

---

# 6. Finding Loss-Making Products

Products where:

```text
Cost Price > Selling Price
```

```javascript
for (var i = 0; i < products.length; i++) {
    if (products[i].cp > products[i].sp) {
        console.log(products[i].name);
    }
}
```

### Example

* Mechanical Keyboard
* Water Bottle
* Sports Shoes
* Coffee Mug

These products are being sold at a loss.

---

# 7. Category-wise Quantity Aggregation

Created an object to store total quantity per category.

```javascript
const productQty = {};
```

### Logic

```javascript
for (var i = 0; i < products.length; i++) {

    if (productQty[products[i].category]) {

        productQty[products[i].category] =
            productQty[products[i].category] +
            products[i].quantity;

    } else {

        productQty[products[i].category] =
            products[i].quantity;
    }
}
```

---

## Understanding the Logic

### Step 1

Check whether category already exists.

```javascript
if(productQty[products[i].category])
```

Example:

```javascript
productQty["Electronics"]
```

---

### Step 2

If category exists

Add current quantity.

```javascript
productQty["Electronics"] += quantity;
```

---

### Step 3

If category does not exist

Create category and assign quantity.

```javascript
productQty["Electronics"] = quantity;
```

---

## Final Output

```javascript
{
  Electronics: 63,
  Stationery: 100,
  Accessories: 50,
  Bags: 20,
  Home: 75,
  Footwear: 14,
  Kitchen: 45
}
```

---

# Key Learnings

* Arrays can store multiple objects.
* Objects can be accessed using dot notation and bracket notation.
* Loops help process large datasets.
* Business calculations can be performed using loops.
* Aggregation means combining data into summarized form.
* Objects are useful for grouping and counting data.
* Real-world inventory systems use similar logic.

---

# Interview Questions

### Q1. Difference between Array and Object?

**Array**

* Stores ordered data.
* Accessed using index.

**Object**

* Stores data as key-value pairs.
* Accessed using keys.

---

### Q2. Why use aggregation?

Aggregation helps summarize large amounts of data into meaningful information.

Example:

* Total quantity
* Total sales
* Total investment
* Category-wise stock

---

### Q3. What is dynamic object key access?

```javascript
productQty[products[i].category]
```

The key is generated dynamically during runtime.

---

# Day 22 Summary

Today I practiced working with arrays of objects and performed real-world inventory management calculations. I learned how to calculate total stock quantity, total investment, total selling value, profit/loss percentage, identify loss-making products, and aggregate category-wise quantities using JavaScript objects and loops.

















