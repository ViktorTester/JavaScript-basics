let multilineString = `
    The program first asks the user for an amount, and then asks what operation
    he wants to perform with it: deposit this amount into the account or withdraw
    this amount from the account. If the withdrawal amount exceeds the balance,
    the program displays a message indicating insufficient funds.
`;


let bankAccount = {
    balance: 500,

    deposit: function (amount) {
        this.balance += amount;
        return this.balance;
    },

    withdraw: function (amount) {
        if (amount > this.balance) {
            return 'Недостаточно средств на счете';
        } else {
            this.balance -= amount;
            return this.balance;
        }
    },
};

const amount = Number(prompt());
const choice = prompt();

if (choice === "внести") {
    console.log(bankAccount.deposit(amount));
} else if (choice === "снять") {
    console.log(bankAccount.withdraw(amount));
}
