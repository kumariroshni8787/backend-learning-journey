let employee = {
    name: "Suresh",
    age: 28,
    role: "Backend Developer",
    salary: 50000,
    skills: ["JavaScript", "Node.js", "MongoDB"]
};

// Access
console.log("Name:", employee.name);
console.log("Role:", employee.role);

// Update
employee.salary = 60000;

// Add new property
employee.experience = 3;

// Loop object
for (let key in employee) {
    console.log(key, "=>", employee[key]);
}

// Nested access (array inside object)
console.log("First Skill:", employee.skills[0]);