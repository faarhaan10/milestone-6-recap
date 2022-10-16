const numbers = [6, 2, 7, 3, 9, 10, 34, 2, 3, 3];

for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
    // return numbers[i] + 2
}

// life easy methods of loop in JS , just for arrays
numbers.forEach(item => {
    // console.log(item)
    // it can't return
});

// map
// it can return an Array
numbers.map(number => (number + 1));
// console.log(afterAdd);

//filter
// it also return an Array
// with matching items
// numbers.filter(number => condition_part)
// const numbers = [6, 2, 7, 3, 9, 10, 34, 2, 3, 3];
const numberFilter = numbers.filter(number => number === 9)


//find
// it also return
// with only 1st item
// numbers.filter(number => condition_part)
// const numbers = [6, 2, 7, 3, 9, 10, 34, 2, 3, 3];
const numberFind = numbers.find(number => number === 3)
console.log(numberFind)