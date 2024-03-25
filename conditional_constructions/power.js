let multilineString = `
    The program asks the user for a number: and then raise
    the number 2 to a power equal to the entered number.
`;

let N = Number(prompt())
let counter = 1
let total = 1

while (counter !== N + 1) {
    total *= 2
    counter += 1
}
console.log(total)