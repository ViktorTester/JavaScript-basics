let multilineString = `
  The program evaluates mood based on a number entered by the user from 1 to 10
`;

let a = Number(prompt());

if (a > 0 && a < 4) {
    console.log("Bad");
} else if (a > 3 && a < 8) {
    console.log("Normal");
} else if (a > 7 && a < 11) {
    console.log("Good");
} else {
    console.log("Number out of range");
}

