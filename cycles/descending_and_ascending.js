let multilineString = `
  The program asks the user first for the number num1, and then for the number num2.
  If num1 is greater than num2, the program prints all numbers in order from num1
  to num2, inclusive, from largest to smallest. If num1 is less than num2,
  the program prints all numbers in order from num1 to num2, inclusive,
  from smallest to largest.
`;


num1 = Number(prompt())
num2 = Number(prompt())

if (num1 > num2) {
    while (num2 - 1 !== num1) {
        console.log(num1)
        num1--
    }
} else if (num2 > num1) {
    while (num1 - 1 !== num2) {
        console.log(num1)
        num1++
    }
}
