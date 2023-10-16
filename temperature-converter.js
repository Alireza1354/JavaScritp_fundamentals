
let temp = 32;

// The formula to convert a temperature in fahrenheit to Celsius
// is our temperature, minus 32, times, five divided by nine.
function toCelsius(temp) {
    return (temp - 32) * (5 / 9);
}

// The formula to convert Celsius to fahrenheit
// is temp, times nine, divided by five plus 32
function toFahrenheit(temp) {

    return temp * 9 / 5 + 32;
}

// Let's say our temperature is currently in fahrenheit
// and i need to convert this to Celsius.
// I will invoke toCelsius() function and pass in my temperature.
temp = toCelsius(temp);

// At the end we will display whatever our temperature is.
console.log(temp);
// the temperature should be zero degree Celsius.

// If we're converting this to fahrenheit then 32 degrees Celsius
// converted to fahrenheit:

temp = toFahrenheit(temp);
console.log();
// is 89.6 degrees.