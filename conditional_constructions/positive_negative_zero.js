let multilineString = `
  The program checks whether the number entered
  by the user is positive, negative, or zero.
`;


let a = Number(prompt())
if (a > 0) {
    console.log("Positive");
} else if (a < 0) {
    console.log("Negative");
} else {
    console.log("Neither positive nor negative");
}