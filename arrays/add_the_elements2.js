let multilineString = `
    The program asks for the number of array elements, and then asks for the
    array elements one at a time the appropriate number of times. The program
    adds each element entered by the user to the end of the array. Next, using
    the for...of loop, the length of each element of the userArray array
    is added one by one to the lengths array.
`;

const numElements = Number(prompt("Enter the number of elements in the array:"));
const userArray = [];
const lengths = [];

for (let i = 0; i < numElements; i++) {
    let n = prompt()
    userArray.unshift(n)
}

for (const word of userArray) {
    lengths.unshift(word.length)
}

console.log(lengths);