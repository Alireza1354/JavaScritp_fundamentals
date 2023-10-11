let a = [4, 8, 15, 16, 23, 42];
let b = ['david', 'eddie', 'alex', 'michael'];

// Access individual elements
console.log(a[0]);
console.log(b[3]);

// Print out all the values in array
// You can just provide the variable name that contains the array
console.log(a);

// Change or set the value of one of the elements
a[0] = 7;
console.log(a);

// What is data type of array ---> object
console.log(typeof a);

// Single array can hold different data types
// there's no restriction
let c = [4, 'alex', true];
console.log(c);

// What happens if i try to access an element with a index that does not exist? ---> undefined
console.log(b[4]);

/* We can also just programmatically determine the number of elements 
in an array by using a special propery.
it will give us the actual number, Not zero based.
(.) dot is the memeber access operator */
console.log(a.length);


// What happens with all of the elements between?
// What will we get?
a[10] = 77;
console.log(a); //---> (11) [7, 8, 15, 16, 23, 42, …, 77] <---- there are empty elements inside

// Add element at the end of the array 
// no matter how many elements are currently in the array
a.push(77);
console.log(a);

// Remove the last element of the array
a.pop();
a.pop();
a.pop();
a.pop();
console.log(a);






