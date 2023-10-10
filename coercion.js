// Type Coercion and Conversion

let a = 7;
let b = '6';
b = parseInt(b, 10);
// Popped up this little box called intellisense
// String concatenation operator (+)
let c = a + b;
console.log('Answer: ' + c);
console.log(typeof c);


let d = parseInt('bob', 10);
console.log(d); //---> Nan (not a number)


let e = isNaN(d);
console.log(e); //---> ture

