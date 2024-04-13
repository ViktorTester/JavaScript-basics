let multilineString = `
    The program first asks for the number of array elements, and then
    queries the array elements one by one the appropriate number of times.
    The program adds each element entered by the user to the beginning
    of the array and outputs the resulting array.
`;


const numElements = Number(prompt("Enter the number of elements in the array:"));
const userArray = [];

for (let i = 0; i < numElements; i++) {
    let n = prompt()
    userArray.unshift(n)
}

console.log(userArray);