
//----02:03:53---video

// Answer will be a random number between 1 and 10

/* const answer = Math.random() * 10; ---> this will give us a random number
    between zero and nine.
*/

// const answer = Math.random() * 10 + 1; ---> Add 1 for numbers one through ten.


const answer = Math.floor(Math.random() * 10 + 1);

let guesses = 0;

// Set the onClick event attribute equal to a function.
document.getElementById("submitButton").onclick = function () {

    let guess = document.getElementById("guessField").value;

    guesses += 1;

    if (guess == answer) {
        alert(`${answer} is #. It took you ${guesses} guesses.`);

    } else if (guess < answer) {
        alert("Too small!");
    }
    else {
        alert("Too larg!");
    }

}