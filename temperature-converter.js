
document.getElementById("submitButton").onclick = function (params) {

    let temp; // Declare a local variable
    temp = document.getElementById("textBox").value;

    // When we accept user input form a text box
    // it's of a string type. console.log(typeof temp); ---> string
    // We'll need to convert that to a number.
    // So, let's reassign temp equal to, use the number constructor,
    // and pass in our temperature.
    temp = Number(temp);

    /* When we click on our submit button let's check to see,
        which one of these radio buttons is selected.
        Let's begin with the celsius radio button(cButton).

        if (document.getElementById("cButton").checked == true) {

        }

        " document.getElementById("cButton").checked ---> boolean "

        Since this is a boolean value,
        you don't need necessarily add equals true (== true),
    */

    if (document.getElementById("cButton").checked) {
        // if our Celsius radio button is selected, do somthing...

        // Invoke the toCelsius function
        temp = toCelsius(temp);
        // after the temperature converted, we need to change our label
        document.getElementById("tempLabel").innerHTML = temp + "°C";
        // If you're writing code on pc and you need the degree symbol,
        // one shortcut is to hold ALT and on the numpad press 0176
        // If you're on a mac then press and hold the SHIFT OPTION & keys
    }

    else if (document.getElementById("fButton").checked) {
        // else if our fahrenheit radio button is selected do somthing eles...
       
        // Invoke the toFahrenheit function
        temp = toFahrenheit(temp);
        // after the temperature converted, we need to change our label
        document.getElementById("tempLabel").innerHTML = temp + "°F";
    }

    else {
        // and if we didn't select anyting.
        document.getElementById("tempLabel").innerHTML = "Select a unit";
    }
}

// The formula to convert a temperature in fahrenheit to Celsius is:
// our temperature, minus 32, times five divided by nine.
function toCelsius(temp) {
    return (temp - 32) * (5 / 9);
}

// The formula to convert Celsius to fahrenheit
// is temp, times nine, divided by five plus 32
function toFahrenheit(temp) {

    return temp * 9 / 5 + 32;
}