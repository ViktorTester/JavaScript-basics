let multilineString = `
    The program simulates the increase of the deposit amount in the bank,
    which doubles every month. The user must enter the initial deposit amount
    and the number of months. The program displays investment data for each month.
`;

let total = Number(prompt());
let months = Number(prompt());

for (i = 1; i < months + 1; i++) {
    console.log(`Month ${i}: ${total}`)
    total *= 2
}
