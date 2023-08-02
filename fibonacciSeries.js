"use strict"
const prompt = require("prompt-sync")({sigint: true});
let n = prompt(parseInt("Enter a number: ")); // taking interger input from the user
if (n < 1) { // checking if input n from user is a valid positive intger
    console.log ("you have entered an invalid input")
} else {
    let fib=[0]; // creating an array called fib
    fib.length = n; // assigning the length of fib array equal to the number from the user
    if (n > 1) {   // checking if n is more than 1 or equal to 1
        fib[1] = 1; // assigning 1 to the 2nd index of fib if n is more than 1
                   // else, it will only print 1 and exit
    }   let count = 2;
        while (count < n) {
        fib[count] = fib[count - 2] + fib[count - 1]; // adding fibonnaci array number elements to fib arry
        count++;
    }
    console.log(`First ${n} terms of fibonacci sequence are: ${fib}`);
}
console.log(`*** Finish Generating Fibonacci Numbers ***`);