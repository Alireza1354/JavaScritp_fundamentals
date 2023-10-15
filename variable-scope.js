
//**************************************************
// Variable scope = where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to a function(){}

// global variable = is declared outside any function
// (if global, var will CHANGE browser's window properties.)
//**************************************************

// example:
// Let's create a for loop.
// We'll count up to three, 
// Then we will declare a counter of i.
// Set this equal to one.
// Will continue as long as index is less than or equal to three.
// Then increment index by 1ne

for (let index = 3; index <= 3; index++) {
    console.log(index);
}
// Result ---> 1,2,3

// What if i attempt to access,
// this variable 'index' outside of this for loop,
// What would happen???

console.log(index); //---> Uncaught ReferenceError: 'index' is not defined.

// it doesn't exist outside of the set of curly braces!

// if we instead used the var key word to declare a variable,
// then this variable, can exist outside of curly braces.

for (var index = 1; index <= 3; index++) {
    //console.log(index);
}
console.log(index); //---> 4 ---> this could be a problem!
// if i would like to reuse this counter,
// but we declared it with var since it already has a value,
// it's going to potentially mess with my program and cause problems.

//*********************************************************************
// However any variable declared with the var keyword doesn't exist
// outside of any functions.

doSomething(); //---> Invoke function.

function doSomething() {
    for (var index = 1; index <= 3; index++) {
        //console.log(index);
    }
}
// Now when 'index' display idex after it's been declared within var keyword,
// we have that Uncaught reference error.

console.log(index); //---> Uncaught ReferenceError: 'Index' is not defined.

// A variable declared with the var keyword can scape a set of curly braces,
// but it can't escape a function if it's contained withing one.

// ******* Global variable ***********************************************
// A global variable is declared outside of any function so we have our function,
// if i was to declared:

let name = "Bro";

// Since this variable is outside of any function,
// it's considered a global variable.

// If you use the 'var' keyword when declaring a global variable,
// that can be problematic,
// if a variable declared with var, then is global,
// and it can and will change the browser's window properties.

