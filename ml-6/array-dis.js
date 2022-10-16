

// Array distructuring
// syntax:
// const [ distructured items ] = [ array ]

const [firstItem, secondItem] = [0, 99999999, 2, 3, 4, 5555555, 6, 7, 8, 9]


// object distructuring
// no need to skip
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

// const { children, name } = person;
const { first } = person.children;


// spread operator

// for array 
const nums = [0, 99999999, 2, 3, 4, 5555555, 6, 7, 8, 9]
const [a, b, ...rest] = nums

console.log([...nums, 'hero alom']);

// for object 
const { name, age, ...restObj } = person;







