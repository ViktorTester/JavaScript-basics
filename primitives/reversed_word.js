let multilineString = `
    The program prompts the user for a string and then
    displays that string in reverse order and in lowercase.
`;

let s = 'test';
let newWord = '';

for (let i = s.length - 1; i > -1; i--) {
    newWord += s[i].toLowerCase()
}

console.log(newWord);