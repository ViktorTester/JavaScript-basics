let multilineString = `
  The program asks the user for a number and then
  calculates its factorial using a while loop
`;

let currentNumber = 1;
let targetNumber = Number(prompt());
let counter = 1;

while (targetNumber + 1 !== counter) {
    currentNumber *= counter
    counter += 1
}

console.log(`The factorial of ${targetNumber} is ${currentNumber}`)


