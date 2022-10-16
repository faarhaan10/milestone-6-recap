//nested-object

// if (condition) {
//     if (condition) {
//         statement
//     }
// }
// else
//     if (condition) {
//         statement
//     }

const myAge = 4;

const person = {
    name: 'hero alom',
    home: 'bogura',
    age: 7,
    children: {
        first: 'h',
        second: 'a',
        third: {
            third1: 't1',
            third2: 't2'
        },
        forth: [1, 2, 3, 4, 5]
    }
}
// console.log(person.children.forth)
// const child = person.children
// console.log(child.third)

console.log(person?.home && "home exits") // optional chaining
// console.log(person.home ? 'yes home exits' : 'homeless') // ternary



// ///////////////////////////object methods/////////////////////////////////////
// key
// Object.keys(object_name)
// it will return an array with keys of the object
const objectKeys = Object.keys(person)
// console.log(objectKeys);

// values
// Object.values(object_name)
// it will return an array with values of the object
const objectValues = Object.values(person)
console.log(objectValues)