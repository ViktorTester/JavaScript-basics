let multilineString = `
    There is a budget object with properties income (income) and expenses (expenses),
    the values of which are entered by the user and the calculateProfit method,
    which calculates profit using the following formula:

    Profit = income - expenses
    
    If the profit is positive, the program displays the profit value. If the profit is zero,
    the program displays a message stating that the user has worked to zero. If the profit
    is negative, the program displays how much the user has gone into the red.
`;


const budget = {
    calculateProfit() {
        let profit = this.income - this.expenses;
        if (profit > 0) {
            return `Ваша прибыль составляет ${profit} рублей`
        } else if (profit === 0) {
            return 'Вы отработали в ноль'
        } else {
            return `Вы ушли в минус на ${Math.abs(profit)} рублей`
        }
    }

}
budget.income = Number(prompt());
budget.expenses = Number(prompt());

console.log(budget.calculateProfit())
