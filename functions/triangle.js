let multilineString = `
    The program asks the user for the lengths of the three sides of a triangle
    and declares a function 'checkTriangleExistence', which takes the lengths
    of the sides as parameters and returns a message about whether
    a triangle with such sides exists or not.

`;


let a = Number(prompt());
let b = Number(prompt());
let c = Number(prompt());

function checkTriangleExistence(side1, side2, side3) {
    if (a >= b + c || b >= a + c || c >= b + a) {
        return 'Triangle does not exist'
    } else {
        return 'Triangle exists'
    }
}

console.log(checkTriangleExistence(a, b, c))
