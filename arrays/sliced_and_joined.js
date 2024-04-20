let multilineString = `
    The program asks the user for arbitrary values separated by
    commas and spaces and places them in an array

    Next, the program asks the user for the starting and ending
    indexes (inclusive) one by one to slice the array.

    Then, the program creates a new array containing the elements
    specified by the user, and outputs the array elements
    separated by commas and spaces.
`;

let words = prompt().split(', ');
let arr = [];

for (let i = 0; i < words.length; i++) {
    arr.push(words[i]);
}

let a = Number(prompt())
let b = Number(prompt())

const sliced = arr.slice(a, b + 1);
const joined = sliced.join(", ");

console.log(joined);