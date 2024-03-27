let multilineString = `
    The program asks the user for a number, and then declare a function
    that takes that number as a parameter and prints its factorial to the screen.
`;


let number = Number(prompt())

function fact() {

    let currentNumber = 1;
    let counter = 1;

    while (number + 1 !== counter) {
        currentNumber *= counter
        counter += 1
    }
    return currentNumber
}

console.log(fact())
