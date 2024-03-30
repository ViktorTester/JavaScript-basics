let multilineString = `
    The program above checks whether the entered number is even, using a
    functional expression. And the program below does the same thing,
    but using the arrow function.
`;


let a = Number(prompt());
let isEven = function (num) {
    return num % 2 === 0;
}
console.log(isEven(a))


// equivalent to:


let a = Number(prompt());
let isEven = a => {
    return a % 2 === 0;
}

console.log(isEven(a))


