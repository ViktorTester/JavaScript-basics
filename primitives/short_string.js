let multilineString = `
    The program prompts the user for a string and then displays the
    last two characters of that string. If the line is less than 2
    characters long, a message will appear stating that the line is too short
`;


let s = prompt();

if (s.length >= 2) {
    console.log(s.slice(-2))
} else {
    console.log('The entered string is too short')
}

