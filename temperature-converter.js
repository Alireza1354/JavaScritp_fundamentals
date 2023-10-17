
let temp = 32;

// The formula to convert a temperature in fahrenheit to Celsius is:
// our temperature, minus 32, times five divided by nine.
function toCelsius(temp) {
    return (temp - 32) * (5 / 9);
}

document.getElementById("submitButton").onclick = function (params) {

    // When we click on our button let's check to see,
    // if one of these radio buttons is selected.
    // Let's begin with the celsius button.

    // Since this is a boolean value ---> document.getElementById("cButton").checked
    // you don't need necessarily add equals true.(== true),
    // if (document.getElementById("cButton").checked == true)
    // if our Celsius button is selected do something.
    if (document.getElementById("cButton").checked) {

    }
    // if our fahrenheit button is selected so somthing eles.
    else if (document.getElementById("fButton").checked) {

    }
    // and lastly else means we didn't select anyting.
    else {
        document.getElementById("tempLabel").innerHTML = "Select a unit";
    }
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