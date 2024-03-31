let multilineString = `
    There is a catalog object that contains the property magazine: 5. The program changes
    the value of this property to the numeric value entered by the user and prints it,
    but only if it is not less than 10 and not greater than 50.
    If the entered value is outside this range, the program reports this .
`;


const catalogue = {
    magazine: 5,
}

let x = prompt();

if (x <= 50 && x >= 10) {
    catalogue.magazine = x
    console.log(catalogue.magazine)
} else {
    console.log('Enter a number between 10 and 50 inclusive')
}