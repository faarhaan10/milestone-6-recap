const biman = 'bd biman';
const net = 'citicell';

// function something() {
//     console.log('this is a session about milstone 6');
// }
/* 
//to es6 normal function to arrow  function ( => )
function_name = () => code // single line arrow function

function_name = () => { // multiline
    code
}
 */

const something = () => {
    console.log('this is a session about milstone 6')
}


function callMe() {
    const res = ' yes! i can hear u';
    return res;
}
const response = callMe();
// console.log(response)


//multi line
const callMe1 = () => {
    const res = ' yes! i can hear u';
    // code 
    // code 
    // code 
    // code 
    return
}

// single line
const callMe2 = () => ' yes! i can hear u'
const response2 = callMe2()
console.log(response2)


const response1 = callMe1();
console.log(response1);



// scoping
// -global scope
// - function scope

const testScope = () => {
    const num = 5;


    const anotherFunc = () => {
        console.log(num)
        const numInside = 10;
    }

    if (true) {

    }

    const another2 = () => {
        const anotherVar = 15;
    }
}
testScope();
console.log(numInside)
// console.log(net);

