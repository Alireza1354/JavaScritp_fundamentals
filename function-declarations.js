function sayHello() {
    console.log('-------------');
    console.log('Hello');
    console.log('-------------')
}

// Function invocation operator ---> () ---> opening close parenthese.
sayHello();

// Assigning the function to a variable
let a = sayHello; // ---> without function invokation operator !!!!!!
a();

// Create a new argument into our function
function sayHello(name) {
    console.log('-------------');
    console.log('Hello ' + name + '!');
    console.log('-------------')
}

sayHello('bob');
sayHello('david');
sayHello('micheal');

// Function with return value
function calculateTax(amount) {
    let result = amount * 0.0825;
    return result;
}

let tax = calculateTax(100);
console.log(tax);