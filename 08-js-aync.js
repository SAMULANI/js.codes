// node 08-js-async.js

// console.log("statement 1");
// console.log("statement 2");
// console.log("statement 3");
// // OP: 1 2 3

// setTimeout(arg1, arg2); // pauses execution for some time
// setTimeout(arg1, arg2); // takes two arguments 
// setTimeout(arg1 is a function, arg2 is number of milliseconds);
// setTimeout(() => {} , 2000);

// console.log("statement 1");
// setTimeout(() => {
//     console.log("statement 2"); // takes 3 seconds to execute  
// },
//     2000);
// console.log("statement 3");

// OP: 1 3 2 
// console.log('hiii');
// setTimeout(() => {
//     console.log('hi');
// },
// 3000);

// console.log('hiiiiiii');

// assignment - do this 
// setTimeout( (arg) => { some code , arg()} , 2000 );
// let funAsArg =() => {}

// OP: 1 2 3  
console.log("statement 1");

const someFunction = (argumentThatNeedsFunction) => {
    setTimeout(() => {
        console.log("statement 2");
        argumentThatNeedsFunction();
    },
        2000);
}

const functionThatIspassedAsArgument = () => {
    console.log("statement 3");
}

someFunction(functionThatIspassedAsArgument);



console.log("Good Morning");
setTimeout((arg) => { console.log("Good afternoon"),arg()},2000);

console.log("Good Evening");