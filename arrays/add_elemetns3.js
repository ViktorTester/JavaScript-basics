let multilineString = `
    The program asks the user for arbitrary values separated by commas and spaces,
    then places them in an array and converts them to a numeric data type
    As a result, the program outputs an array.
`;

let words = prompt().split(', ');
let arr = [];

for (let i = 0; i < words.length; i++) {

    if (isNaN(words[i])) {
        arr.push(words[i]);
    } else {
        arr.push(Number(words[i]));
    }
}

console.log(arr);

