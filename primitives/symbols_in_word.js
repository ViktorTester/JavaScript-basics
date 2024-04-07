let multilineString = `
    The program prompts the user to enter a string and a character.
    The program counts how many times a given character appears in
    the entered string, and then displays this number.
`;

let word = prompt();
let symbol = prompt();
let counter = 0;

for (i = 0; i < word.length; i++) {
    if (word[i] === symbol) {
        counter += 1
    }
}

console.log(`Символ "${symbol}" встречается ${counter} раз(-а)`)