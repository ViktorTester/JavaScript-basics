let multilineString = `
    The program asks the user for two sets of two numbers and declares two functions:
    'findMax' and 'compareMax'. The 'findMax' function takes two numbers as parameters
    and returns the larger of them. The 'compareMax' function takes the results of finding
    the maximum of two sets of numbers as parameters and prints
    a message telling you which number is greater.

`;

let x = Number(prompt());
let y = Number(prompt());

let z = Number(prompt());
let q = Number(prompt());

function findMax(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}


function compareMax(bigest1, bigest2) {
    if (top1 > top2) {
        return 'The maximum number of the first set is greater'
    } else if (top2 > top1) {
        return 'The maximum number of the second set is greater'
    } else {
        return 'The maximum numbers of sets are equal'
    }

}

let top1 = findMax(x, y)
let top2 = findMax(z, q)
let ultraTop = compareMax(top1, top2)

console.log(ultraTop)