let multilineString = `
    There is an object with a single method that takes two numbers entered by the user
    as parameters and outputs the remainder of the first number divided by the second.
`;


let a = Number(prompt())
let b = Number(prompt())
let numbers = {
    a,
    b,
    displayInfo() {
        console.log(this.a % this.b);
    }
}

numbers.displayInfo()