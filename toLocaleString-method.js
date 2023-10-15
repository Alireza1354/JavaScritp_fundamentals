// toLocaleString() = returns a string with 
// a language sensitive representation of this number

// number.toLocaleString(locale, {options});

// 'locale' = specify that language (undefined = default set in browser)
// 'options' = object with formating options.

// let myNum = 123456.789;
// myNum = myNum.toLocaleString("en-US"); //---> 123,456.789
// myNum = myNum.toLocaleString("fa-IR"); //---> ۱۲۳٬۴۵۶٫۷۸۹
// myNum = myNum.toLocaleString("fa-IR", { style: "currency", currency: "IRR" }); //---> ریال ۱۲۳٬۴۵۷
// myNum is rounded

//// Germany
// myNum = myNum.toLocaleString("de-DE", { style: "currency", currency: "EUR" }); //---> 123.456,79 €

// Let's try a percent
//myNum = myNum.toLocaleString(undefined, { style: "percent" }); //---> 12,345,679%  
// 12 million percent ---> 12,345,679%

// Let's try celsius
let myNum2 = 100;
myNum2 = myNum2.toLocaleString(undefined, { style: "unit", unit: "celsius" }); //---> 100°C  

console.log(myNum2);

