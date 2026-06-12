// // Object Example

// var student = {
//     isEngineer: true,
//     contact: {
//         at: 'ranchi, jharkhand',
//         phone: '9876543210',
//         email: 'sk@gmail.com'
//     },
//     favFood: ['dal', 'roti', 'alu']
// }

// console.log(student)                 // Complete object
// console.log(student.name)            // undefined
// console.log(student.contact)         // Nested object
// console.log(student.contact.phone)   // Phone number

// // Bracket Notation
// console.log(student["contact"]["email"])



//Spread Operator Example
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


//Overwriting Example with Spread Operator

// const a = {
//     name: 'Satya'
// }

// const b = {
//     name: 'Raj'
// }

// const result = {
//     ...a,
//     ...b
// }

// console.log(result)